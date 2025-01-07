# middleware
Projektbeschreibung

Dies ist eine einfache Spring Boot REST API, die im Rahmen des Distributed Application Development Lab entwickelt wurde. Die API stellt einen Test-Endpunkt zur Verfügung und ist vollständig containerisiert, um die Anforderungen an Cloud-native und verteilte Systeme zu erfüllen.

Technologien verwendet

Java 17
Spring Boot 3.4.1
Docker und Docker Compose
Swagger-UI
Kubernetes (Minikube)
API-Endpunkte

GET /test – Test-Endpunkt, der eine einfache Rückmeldung gibt

Installation und Ausführung

Wechsel in das Projektverzeichnis:
cd middleware
Docker-Container erstellen und starten:
docker-compose up --build
Zugriff auf die API

Swagger-UI ist erreichbar unter:
http://localhost:8080/swagger-ui/index.html

Der Test-Endpunkt ist erreichbar unter:
http://localhost:8080/test

12-Factor App Prinzipien angewendet

Codebase – Der gesamte Code liegt in einem zentralen Projektverzeichnis.
Dependencies – Alle Abhängigkeiten werden in der pom.xml verwaltet.
Config – Konfigurationen wie Ports werden über Umgebungsvariablen gesteuert.
Backing Services – Das Backend ist als separater Service definiert.
Build, Release, Run – Docker-Images werden mit docker-compose erstellt und ausgeführt.
Processes – Das Backend läuft als stateless Prozess.
Port Binding – Der Service wird über Port 8080 bereitgestellt.
Concurrency – Container können skaliert werden, indem Kubernetes verwendet wird.
Disposability – Der Service kann schnell gestartet und gestoppt werden.
Dev/Prod Parity – Die Umgebung ist durch Docker in Dev und Prod konsistent.
Logs – Logs werden direkt in der Konsole angezeigt.
Admin Processes – Verwaltung erfolgt über Docker-Kommandos und Kubernetes-Manifeste.
Kubernetes Deployment

Falls Kubernetes verwendet wird, sind folgende Schritte nötig.

Minikube starten:
minikube start
Deployment erstellen:
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
