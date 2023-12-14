import Chart from 'chart.js/auto';
import './TemperatureCourbe.scss';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { obtenirDerniereDonneeTemperature } from '../data/donnee-modele';

export default function TemperatureCourbe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();

    const desinscrire = obtenirDerniereDonneeTemperature((temperature) => {
      setData(prevData => {
        let newData = [...prevData, { time, temperature }];
        if (newData.length > 10) {
          // Supprimer la première valeur si la longueur est déjà de 10
          newData = newData.slice(1);
        }
        // Stocker les données dans le localStorage
        localStorage.setItem('temperatureData', JSON.stringify(newData));
        return newData;
      });
    });

    // Récupérer les données du localStorage lors de l'initialisation du composant
    const savedData = JSON.parse(localStorage.getItem('temperatureData'));
    if (savedData) {
      setData(savedData);
    }

    return () => desinscrire();
  }, []);

  const chartData = {
    labels: data.map(d => d.time),
    datasets: [
      {
        label: 'Temperature',
        data: data.map(d => d.temperature),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="bloc temperature-courbe">
      <h4>Temperature</h4>
      <Line data={chartData} />
    </div>
  );
}