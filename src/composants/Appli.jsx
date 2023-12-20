import './Appli.scss';
import React, { useState } from 'react';
import ChangeTemperature from './ChangeTemperature'; // Assurez-vous d'importer votre nouveau composant
import Entete from './Entete';
import InfoTemperature from './InfoTemperature';
import EtatTemperature from './EtatTemperature';
import InfoHumidite from './InfoHumidite';
import TemperatureCourbe from './TemperatureCourbe';

export default function Appli() {
  const [temperatureAmbiante, setTemperatureAmbiante] = useState({ min: 22.51, max: 23.49 });

  const changerTemperatureAmbiante = (nouvelleTemperature) => {
    setTemperatureAmbiante(nouvelleTemperature);
  };

  return (
    <div className="Appli">
      <Entete />
      <InfoTemperature temperatureAmbiante={temperatureAmbiante} />
      <EtatTemperature temperatureAmbiante={temperatureAmbiante} />
      <TemperatureCourbe />
      <InfoHumidite />
      <ChangeTemperature changerTemperature={changerTemperatureAmbiante} />
    </div>
  );
}