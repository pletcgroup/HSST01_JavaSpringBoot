// API Base URL
const API_BASE_URL = 'http://localhost:8080/api';

// ดึง DOM elements
const btnHello = document.getElementById('btnHello');
const btnGreet = document.getElementById('btnGreet');
const nameInput = document.getElementById('nameInput');
const helloResult = document.getElementById('helloResult');
const greetResult = document.getElementById('greetResult');

// ฟังก์ชันแสดงผลลัพธ์
function showResult(element, message, isSuccess = true) {
    element.className = 'result ' + (isSuccess ? 'success' : 'error');
    element.textContent = message;
    element.style.display = 'flex';
}

// ฟังก์ชันแสดง loading
function showLoading(element) {
    element.className = 'result';
    element.innerHTML = '<span class="loading"></span>กำลังโหลด...';
    element.style.display = 'flex';
}

// ฟังก์ชันเรียก API ทั่วไป
async function callAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        return { success: true, data };
    } catch (error) {
        return { 
            success: false, 
            error: error.message 
        };
    }
}

// Event: ปุ่มดึงข้อความทักทาย
btnHello.addEventListener('click', async () => {
    showLoading(helloResult);
    
    const result = await callAPI(`${API_BASE_URL}/hello`);
    
    if (result.success) {
        showResult(helloResult, `✅ ${result.data}`, true);
    } else {
        showResult(
            helloResult, 
            `❌ เกิดข้อผิดพลาด: ${result.error}`, 
            false
        );
    }
});

// Event: ปุ่มทักทายด้วยชื่อ
btnGreet.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    
    if (!name) {
        showResult(greetResult, '⚠️ กรุณากรอกชื่อก่อนค่ะ', false);
        nameInput.focus();
        return;
    }
    
    showLoading(greetResult);
    
    const result = await callAPI(`${API_BASE_URL}/hello/${encodeURIComponent(name)}`);
    
    if (result.success) {
        showResult(greetResult, `✅ ${result.data}`, true);
    } else {
        showResult(
            greetResult, 
            `❌ เกิดข้อผิดพลาด: ${result.error}`, 
            false
        );
    }
});

// Event: กด Enter ในช่องกรอกชื่อ
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        btnGreet.click();
    }
});

// เช็คสถานะ API เมื่อโหลดหน้าเว็บ
window.addEventListener('load', async () => {
    console.log('🚀 Frontend loaded successfully!');
    console.log('📡 API Base URL:', API_BASE_URL);
    
    // ลองเช็คว่า API ทำงานหรือไม่
    try {
        const response = await fetch(`${API_BASE_URL}/hello`);
        if (response.ok) {
            console.log('✅ API is running and accessible!');
        } else {
            console.warn('⚠️ API returned error status:', response.status);
        }
    } catch (error) {
        console.error('❌ Cannot connect to API:', error.message);
        console.log('💡 Make sure Spring Boot is running on http://localhost:8080');
    }
});

// แสดงข้อความต้อนรับ
console.log(`
╔═══════════════════════════════════════╗
║   Spring Boot 3.5.0 Frontend Demo    ║
║   Powered by Vanilla JavaScript       ║
╚═══════════════════════════════════════╝
`);
