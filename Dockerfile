FROM openjdk:17-jdk-slim

# Argument für die JAR-Datei
ARG JAR_FILE=target/demo-0.0.1-SNAPSHOT.jar

# JAR-Datei in den Container kopieren
COPY ${JAR_FILE} app.jar

# Port für die Anwendung
EXPOSE 8080

# Startbefehl für die Spring Boot-Anwendung
ENTRYPOINT ["java", "-jar", "app.jar"]
