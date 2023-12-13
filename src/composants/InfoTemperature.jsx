import React from 'react';
import './InfoTemperature.scss';
import imgArrierePlan from '../images/imgArrierePlan.jpg'; // Assurez-vous que le chemin est correct
import ambient from '../images/ambient.png'; // Assurez-vous que le chemin est correct

export default function InfoTemperature() {
  return (
    <div className="info-temperature">
      <img className="img-arriere-plan" src={imgArrierePlan} alt="" />

      <div className="texte-temperature">
        <h4>date</h4>
        <h2>30°C</h2>

        <div className="position">
          <div className="icone-position"></div>
          <h3>Local 0000</h3>
        </div>
      </div>

      <div className="icone-temperature">
        <img src={ambient} alt="icone temperature ambiente" />
      </div>
    </div>
  );
}