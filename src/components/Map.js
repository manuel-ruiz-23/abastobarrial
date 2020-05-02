/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import {
    useParams
} from "react-router-dom"
import MapsNavigation from './MapsNavigation';

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
  align-items: flex-start;
  /* padding-top: 44px; */
  overflow: hidden;
  >iframe{
    width: 100%;
    height: 60vh;
  }
`;

const ComingSoon = styled.div`
  display: inline-flex;
  flex-flow:column;
  align-items: center;
  font-family: sans-serif;
  padding-top: 1rem;
  font-size: 1rem;
  color: #fa9a00;
  text-align:center !important;
  width:600px;
`;

const Title = styled.h3`

`;


export default function Map(props) {
    const { colonia } = useParams();
    const Mapas = props.Mapas;

    if (Mapas === undefined || !(colonia in Mapas)) {
        return (
            <Container>
                <Title>Mapas de comercios locales</Title>
                <ComingSoon>{colonia !== undefined ? 'No tenemos esa colonia en nuestra base de datos :(' : 'Selecciona una colonia para comenzar a buscar'}</ComingSoon>
                <Content>
                    <MapsNavigation colonias={Mapas} />
                </Content>
            </Container>);
    }

    return (
        <Container>
            <Title>Mapas de comercios locales</Title>
            <Content>
                <MapsNavigation colonias={Mapas} />
                <iframe
                    src={Mapas[colonia]}
                    style={{ display: 'inline-flex', flexShrink: 0 }}
                ></iframe>
            </Content>
        </Container>
    );
}