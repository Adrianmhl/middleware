# Shopping List Application

## Übersicht

Dies ist eine einfache Shopping List Anwendung, die mit Spring Boot erstellt wurde. Sie bietet Endpunkte zum Hinzufügen, Abrufen, Aktualisieren und Löschen von Shopping Items.

## Voraussetzungen

- Java 11 oder höher
- Maven
- Docker
- Docker Compose

## Anwendung starten

### Mit Maven

```sh
./mvnw spring-boot:run

Mit Docker
docker-compose up --build

API Endpunkte
Alle Items abrufen
curl -X GET http://localhost:8080/api/shopping-list/items

Item nach Name abrufen
curl -X GET http://localhost:8080/api/shopping-list/items/{name}

Item hinzufügen
curl -X POST http://localhost:8080/api/shopping-list/items \
-H "Content-Type: application/json" \
-d '{"id": 1, "name": "Milk", "quantity": 2}'

Item aktualisieren
curl -X PUT http://localhost:8080/api/shopping-list/items/{id} \
-H "Content-Type: application/json" \
-d '{"name": "Milk", "quantity": 3}'

Item löschen
curl -X DELETE http://localhost:8080/api/shopping-list/items/{id}

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
Dev/Prod Parity – Entwicklungs-, Staging- und Produktionsumgebungen sind so ähnlich wie möglich.
Logs – Logs werden als Stream behandelt und können von Tools wie docker logs abgerufen werden.
Admin Processes – Administrative Aufgaben können über separate Prozesse ausgeführt werden.


Code-Dokumentation

Build
./mvnw clean install

Containerize
docker-compose up --build

Test
./mvnw test