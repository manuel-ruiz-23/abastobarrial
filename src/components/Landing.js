/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import MapsNavigation from './MapsNavigation';

export default function Landing(){
  return (
     <LandingContent>
         <InitialBaner />
    </LandingContent>
  )
}

const InitialBaner = () => (
  <div className="mt-4">
    <Title>
            ¡Hagamos comunidad!
    </Title>
    <br />
    <LandingText>
            Abasto Barrial es un esfuerzo gratuito y comunitario en donde se integran
            las opciones de productos y servicios elaborados por los vecinos de la 
            localidad en un mapa directorio.
    </LandingText>
   {/*
    <Footer>
            <div className="col-lg-6">
                   <p>#Abasto Barrial</p>
            </div>
            <div className="col-lg-6 text-right">
               <a href="#"> <SocialLogo src="/facebook.png" /> </a>
               <a href="#"> <SocialLogo src="/instagram.png" /> </a>
            </div>
        </Footer>
   */}
  </div>
);
const SocialLogo = styled.img`
  height: 32px;
  margin-right: 5%;
`;
const Footer = styled.div`
  height:10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 18pt;
  font-weigth: bolder;
`;
const Hr = styled.div`
  width: 100%;
  max-width: 768px;
  height: 2px;
  background-color: black;
`;

const Title = styled.h1`
color: white;
text-align:left;
`;

const LandingText = styled.p`
  font-size: 1.5rem;
  max-width: 768px;
  margin-top: 2vh;
  margin-bottom: 1rem;
  color: white;
  text-align: left;
  height: 90%;
`;

const BoldOrange = styled.span`
  font-weight: bold;
  color: #ff9900;
`;

const BoldRed = styled.span`
  font-weight: bold;
  color: #ff5656;
`;

const LandingContent = styled.div`
  padding-left: 5vh;
  padding-top: 10vh;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
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