import { bd } from './init';
import { ref, onValue } from 'firebase/database';

export function obtenirDerniereDonneeTemperature(callback) {
  const temperatureRef = ref(bd, 'temperature');

  const desinscrire = onValue(temperatureRef, (instantane) => {
    const valeur = instantane.val();
    callback(parseFloat(valeur).toFixed(2));
  });

  // Retourner la fonction de désinscription pour arrêter d'écouter les mises à jour
  return desinscrire;
}

export function obtenirDerniereDonneeHumidite(callback) {
  const humiditeRef = ref(bd, 'humidity');

  const desinscrire = onValue(humiditeRef, (instantane) => {
    const valeur = instantane.val();
    callback(parseFloat(valeur).toFixed(2));
  });

  // Retourner la fonction de désinscription pour arrêter d'écouter les mises à jour
  return desinscrire;
}
