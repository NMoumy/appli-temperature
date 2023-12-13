import './Appli.scss';
import React from 'react';
import Entete from './Entete';
import InfoTemperature from './InfoTemperature';
import EtatTemperature from './EtatTemperature';
import InfoHumidite from './InfoHumidite';
import TemperatureCourbe from './TemperatureCourbe';


export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <InfoTemperature />
        <EtatTemperature />
        <InfoHumidite />
        <TemperatureCourbe />
    </div>
  );
}
