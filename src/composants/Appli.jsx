import './Appli.scss';
import React from 'react';
import Entete from './Entete';
import InfoTemperature from './InfoTemperature';
import EtatTemperature from './EtatTemperature';
import InfoHumidite from './InfoHumidite';
import TemperatureCourbe from './TemperatureCourbe';

export default function Appli() {
  const temperatureAmbiante = { min: 22.51, max: 23.49 };

  return (
    <div className="Appli">
      <Entete />
      <InfoTemperature temperatureAmbiante={temperatureAmbiante} />
      <EtatTemperature temperatureAmbiante={temperatureAmbiante} />
      <TemperatureCourbe />
      <InfoHumidite />
    </div>
  );
}