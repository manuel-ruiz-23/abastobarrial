/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import {
  useParams
} from "react-router-dom"
import MapsNavigation from './MapsNavigation';
import NavBar from './NavBar';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  width:100%;
  align-items: left;
  /* padding-top: 44px; */
  overflow: hidden;
  >iframe{
    width: 100%;
    height: 60vh;
  }
`;

const CommingSoon = styled.div`
  display: inline-flex;
  flex-shrink:0;
  text-align: center;
  font-family: sans-serif;
  padding-top: 44px;
  font-size: 2rem;
  color: #fa9a00;
`;

const Title = styled.h3`

`;


export default function Map(props) {
  const { colonia } = useParams();
  const Mapas = props.Mapas;

  if (Mapas == undefined || !(colonia in Mapas)) {
    return (
    <Container>
      <NavBar/>
      <Title>Mapas de comercios locales</Title>
      <Content>
      <MapsNavigation colonias={Mapas}/>
      <CommingSoon>No tenemos esa colonia en nuestra base de datos :(</CommingSoon>
        </Content>
      </Container>);
  }

  return (
    <Container>

      <NavBar/>
      <Title>Mapas de comercios locales</Title>
      <Content>
      <MapsNavigation colonias={Mapas}/>
      <iframe
        src={Mapas[colonia]}
        style={{display: 'inline-flex', flexShrink:0 }}
      ></iframe> 
      </Content>
    </Container>
  );
}