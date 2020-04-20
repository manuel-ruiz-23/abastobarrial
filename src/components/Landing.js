/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import MapsNavigation from './MapsNavigation';
import InitialBaner from './InitialBaner/InitialBaner'
export default function Landing(){
  return (
    <LandingContainer>
      <InitialBaner />
      <Title>Mapa de Abasto Barrial</Title>
      <LandingText>Es una iniciativa sin fines de lucro que busca crear un mapa
        barrial acompañado de una base de datos que contenga información
        útil para facilitar la organización comunitaria y así dinamizar la 
        economía local (colonias, barrios) a través del abastecimiento de
        servicios y productos de primera necesidad durante la contingencia.
        En este estado de contingencia por el COVID-19 apoyémonos consumiendo
        en negocios locales y ofreciendo ayuda a quien la necesite.    </LandingText>
        <LandingText>Esto es posible gracias a todos.</LandingText>
      <MapsNavigation />
      <Hr />
      <TablonAnuncios /> 
    </LandingContainer>
  )
}

const Hr = styled.div`
  width: 100%;
  max-width: 768px;
  height: 2px;
  background-color: black;
`;

const Title = styled.h1`
text-align: left;
`;

const LandingText = styled.p`
  font-size: 1.5rem;
  max-width: 44vw;
  margin-bottom: 1rem;
`;

const BoldOrange = styled.span`
  font-weight: bold;
  color: #ff9900;
`;

const BoldRed = styled.span`
  font-weight: bold;
  color: #ff5656;
`;

const LandingContainer = styled.div`
  padding: 0.5rem;
  font-family: sans-serif;
  text-align: left;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

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