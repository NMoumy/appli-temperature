import React, { useState } from 'react';
import './ChangeTemperature.scss';

export default function ChangeTemperature({ changerTemperature }) {
  const [nouvelleTemperature, setNouvelleTemperature] = useState({ min: 0, max: 0 });

  const gererSoumission = (evenement) => {
    evenement.preventDefault();
    changerTemperature(nouvelleTemperature);
    alert(`La température ambiante a été changée à Min: ${nouvelleTemperature.min}, Max: ${nouvelleTemperature.max}. Si vous rafraîchissez la page, vous reviendrez à la température de base.`);
  };

  return (
    <div className='bloc change-temperature'>
      <form onSubmit={gererSoumission}>
        <label>
          Min:
          <input type="number" min="-50" max="50" value={nouvelleTemperature.min} onChange={e => setNouvelleTemperature({ ...nouvelleTemperature, min: e.target.value })} />
        </label>
        <label>
          Max:
          <input type="number" min="-50" max="50" value={nouvelleTemperature.max} onChange={e => setNouvelleTemperature({ ...nouvelleTemperature, max: e.target.value })} />
        </label>
        <input type="submit" value="Changer la température ambiante" />
      </form>
    </div>
  );
}