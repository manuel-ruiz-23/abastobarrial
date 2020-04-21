/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MapsNavigation from '../MapsNavigation';
import InitialBaner from '../InitialBaner/InitialBaner';
import { LandingContainer, BoldOrange, BoldRed, Title, Hr, LandingText } from './Style.js';

export default function Landing(){
  return (
    <LandingContainer>
          <InitialBaner />
          <div className="row">
              <div className="col-lg-6">
              <Title>Mapa de Abasto Barrial</Title>
              <LandingText>Es una iniciativa sin fines de lucro que busca crear un mapa
                barrial acompañado de una base de datos que contenga información
                útil para facilitar la organización comunitaria y así dinamizar la 
                economía local (colonias, barrios) a través del abastecimiento de
                servicios y productos de primera necesidad durante la contingencia.
                En este estado de contingencia por el COVID-19 apoyémonos consumiendo
                en negocios locales y ofreciendo ayuda a quien la necesite.    </LandingText>
                      <LandingText>Esto es posible gracias a todos.</LandingText>
              </div>
              <div className="col-lg-6">

              </div>
              <MapsNavigation />
          </div>
      <Hr />
              <TablonAnuncios /> 
              
    </LandingContainer>
  )
}

const TablonAnuncios = () => (
  <div className="my-4" style={{maxWidth: '512px'}}>
    <h3>Tablón de anuncios<small>(proximamente)</small></h3>
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Voy por mandado en la balderrama</h5>
          <small>Hace 1 día</small>
        </div>
        <p className="mb-1">Voy por tu mandado o medicinas al mercadito #2.</p>
        <small>cel 662 111 22 33.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Necesito comida</h5>
          <small className="text-muted">Hace 2 horas</small>
        </div>
        <p className="mb-1">soy un adulto mayor, vivo en en la colonia san benito agradeceria si pudieran ir al mandado por mi.</p>
        <small className="text-muted">cel 662 221 33 32.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Tengo cubrebocas de sobra</h5>
          <small className="text-muted">Hace 3 días</small>
        </div>
        <p className="mb-1">por favor quédate en tu casa, pero si ocupas salir puedo ayudarte a protegerte, al sur.</p>
        <small className="text-muted">Email maria@example.com.</small>
      </a>
    </div>
  </div>
);