/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

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

  </div>
);

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

const LandingContent = styled.div`
  padding-left: 5vh;
  padding-top: 10vh;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;