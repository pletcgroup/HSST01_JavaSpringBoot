# Spring Boot Project

โปรเจค Spring Boot สำหรับการพัฒนาแอปพลิเคชัน

## โครงสร้างโปรเจค

```
HSST01_JavaSpringBoot/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       ├── DemoApplication.java
│   │   │       └── controller/
│   │   │           └── HelloController.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
└── pom.xml
```

## การรันโปรเจค

### ด้วย Maven

```bash
mvn spring-boot:run
```

### หรือ build และรัน JAR file

```bash
mvn clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

## API Endpoints

- `GET http://localhost:8080/api/hello` - ข้อความทักทาย
- `GET http://localhost:8080/api/hello/{name}` - ข้อความทักทายพร้อมชื่อ

## ความต้องการระบบ

- Java 21 หรือสูงกว่า
- Maven 3.6+ หรือสูงกว่า

## เทคโนโลยีที่ใช้

- Spring Boot 3.5.0
- Spring Framework 6.2.x
- Spring Web
- Spring Boot DevTools
- Maven
