import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
`;

const Colabora = () => {
    return (
        <Container>
            <h3>Muy pronto activaremos esta secci&oacute;n.</h3>
            <p> Por lo pronto enviar por favor tus colaboraciones de negocios a CORREO@ABASTOBARRIAL.ORG. </p>
        </Container>
    )
};

export default Colabora;
