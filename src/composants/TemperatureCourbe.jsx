import React from 'react';
import './TemperatureCourbe.scss';

export default function TemperatureCourbe() {
  return (
    <div className="bloc temperature-courbe">
      <h4>temperature</h4>
      <canvas id="myChart"></canvas>
    </div>
  );
}