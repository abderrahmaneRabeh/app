import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AfficheMesure from './AfficheMesure';

function AfficheMesures() {
    const [mesures, setMesures] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:9000/mesures')
      .then(response => response.json())
      .then(data => setMesures(data))
  }, []);

  // const filteredMesures = mesures.filter(mesure =>
  //   mesure.nom.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Mesures</h1>
      <div className="row">
        {/* <div className="col-md-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by measure name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div> */}
        {mesures.map(mesure => (
          <AfficheMesure key={mesure.nom} mesure={mesure} />
        ))}
      </div>
    </div>
  );
}

export default AfficheMesures