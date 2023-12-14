import './TemperatureCourbe.scss';
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


export default function TemperatureCourbe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.getHours() + ':' + now.getMinutes();
      const temperature = Math.random() * 10 + 20; // Remplacez par la température réelle
      setData(prevData => {
        let newData = [...prevData, { time, temperature }];
        if (newData.length > 10) {
          // Supprimer la première valeur si la longueur est déjà de 10
          newData = newData.slice(1);
        }
        return newData;
      });
    }, 1000); // Mise à jour toutes les 10 minutes

    return () => clearInterval(interval);
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