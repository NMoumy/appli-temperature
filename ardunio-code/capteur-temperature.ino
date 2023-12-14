#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <WiFi.h>
#include <SHT3x.h>

#define WIFI_SSID ""
#define WIFI_PASSWORD ""
#define API_KEY ""
#define DATABASE_URL ""

SHT3x Sensor;

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;
int count = 0;

void setup() 
{
  Serial.begin(115200);
  Sensor.Begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connexion au réseau Wi-Fi...");
  }
  
  Serial.println(WiFi.localIP());
  
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if(Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("signUP OK");
    signupOK = true;
  }
  
  else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback; 
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() 
{
  if (Firebase.ready() && signupOK) {

    // Obtenir la température et l'humidité du capteur
    Sensor.UpdateData();
    float temperature = Sensor.GetTemperature();
    float humidity = Sensor.GetRelHumidity();

    // Envoyer la température à Firebase
    if (Firebase.RTDB.setFloat(&fbdo, "temperature", temperature)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    // Envoyer l'humidité à Firebase
    if (Firebase.RTDB.setFloat(&fbdo, "humidity", humidity)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    count++;
  }
  
  // Ajoutez un court délai si nécessaire pour éviter une consommation excessive de ressources
  delay(100);
}