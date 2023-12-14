# Température Local

L'application Température Local est une application React monopage qui affiche en temps réel la température et l'humidité provenant d'un capteur SHT30 connecté à un ESP32. Elle utilise Firebase pour stocker et récupérer les données de température.(Important il faut que le esp32 sois connecter pour voir les changements)

## Fonctionnalités

- Affiche la température actuelle en temps réel.
- Indique si la température est au-dessus, en dessous ou à la température ambiante.
- Affiche une icône différente en fonction de l'état de la température.
- Affiche un graphique avec les changements de température.

## Technologie utilisée

- React
- CSS/SCSS
- Firebase (Realtime Database)

## Configuration du Capteur

Le script Arduino inclus dans ce projet, situé dans mon dossier "arduino_code", utilise un capteur SHT30 connecté à un ESP32 pour mesurer la température et l'humidité. Les données sont ensuite envoyées à une base de données Firebase en temps réel.

```cpp
// Insérez votre configuration WiFi et Firebase ici
#define WIFI_SSID "..."
#define WIFI_PASSWORD "..."
#define API_KEY "..."
#define DATABASE_URL "..."

// Initialisation du capteur SHT30
SHT3x Sensor;

// Initialisation de Firebase
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

## Crédits

```
Ce projet s'inspire du code de [Random Nerd Tutorials](https://randomnerdtutorials.com/) et de la vidéo de [Education is Life](https://www.youtube.com/watch?v=aO92B-K4TnQ).

