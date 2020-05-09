/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import {
    useParams
} from "react-router-dom"
import MapsNavigation from './MapsNavigation';
import MetaInfo from './MetaInfo';

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

export default function Map(props) {
    const { colonia } = useParams();
    const Mapas = props.Mapas;

    return (
        <Container>
            <MetaInfo descripcion={"Encuentra negocios locales en " + colonia} titulo={"Abasto Barrial en " + colonia} /> 
            <Content>
                <MapsNavigation colonias={Mapas} />
                {Mapas[colonia] && (
                    <iframe
                        src={Mapas[colonia]}
                        style={{ display: 'inline-flex', flexShrink: 0 }}
                    ></iframe>
                )}
                {!colonia && <ComingSoon>Selecciona una colonia para comenzar a buscar</ComingSoon>}
            </Content>
        </Container>
    );
}