import React from 'react'

function AfficheMesure({mesure}) {
  return (
    <div className="col-md-4 mb-3" key={mesure.nom}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{mesure.nom}</h5>
        <p className="card-text">Unité: {mesure.unite}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Last 30 Minutes:
            <ul>
              <li>MO: {mesure.valeurs[0]['30minute']['MO']}</li>
              <li>Pr: {mesure.valeurs[0]['30minute']['Pr']}</li>
            </ul>
          </li>
          <li className="list-group-item">Last 1 Hour:
            <ul>
              <li>MO: {mesure.valeurs[0]['1heure']['MO']}</li>
              <li>Pr: {mesure.valeurs[0]['1heure']['Pr']}</li>
            </ul>
          </li>
          <li className="list-group-item">Last 24 Hours:
            <ul>
              <li>MO: {mesure.valeurs[0]['24heure']['MO']}</li>
              <li>Pr: {mesure.valeurs[0]['24heure']['Pr']}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default AfficheMesure