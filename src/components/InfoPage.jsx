import React from 'react';
import styled from 'styled-components';

export default function InfoPage() {
  return (
    <Container>
 
      <Info>
        <Titulo>Mapa de abasto Barrial</Titulo>
        <p>
          Es una iniciativa sin fines de lucro que busca crear un mapa
          barrial acompañado de una base de datos que contenga
          información útil para facilitar la organización comunitaria y
          así dinamizar la economia local (colonias, barrios) a través del
          abastecimiento de servicios y productos de primera
          necesidad entre sus habitantes durante la contingencia. En
          este estado de contingencia por el COVID-19 apoyémonos
          consumiendo en negocios locales y ofreciendo ayuda a quien la necesite.
        </p>
        <p>
          Esto es posible gracias a la ayuda de todos
        </p>
      </Info>
      <div>
        <Titulo>Aliados</Titulo>
        <a href="https://www.facebook.com/colortierra">
          <Logo src={require('../assets/color-tierra.jpg')} alt="color tierra"/>
        </a>
        <a href="https://www.facebook.com/TabbArchitecture">
          <Logo src={require('../assets/tabb.png')} alt="tabb"/>
        </a>
        <Titulo style={{marginTop: '32px'}}>Colaboradores</Titulo>
        <ColaboradoresUl>
          <li>Manuel Ruiz</li>
          <li>Glenda Yanes Ordiales</li>
          <li>Ezra Koenig</li>
          <li>Rodolfo Cons</li>
          <li>Carolina Ruiz</li>
          <li>Ana Maria Cajigas</li>
          <li>Celerino Herrera García</li>
          <li>Tanya Cedillo</li>
          <li>fundacion hogares</li>
          <li>Buenos vecinos</li>
        </ColaboradoresUl>
      </div>
    </Container>
  )
}

const Titulo = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Info = styled.div`
  max-width: 512px;
`;

const Logo = styled.img`
  height: 128px;
  width: auto;
  margin: 0 32px;
`;

const ColaboradoresUl = styled.ul`
  list-style: none;
  padding: 0;
  >li {
  }
`;

const Container = styled.div`
  padding: 16px;
  padding-top: 32px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1080px;
  flex-wrap: wrap;
`;