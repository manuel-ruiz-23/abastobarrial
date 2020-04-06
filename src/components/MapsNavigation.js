import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MapsNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Title>Mapas de comercios locales</Title>
      <LinksContainer>
        {pathname !== '/' && <Link to="/">Incio</Link>}
        <Link to="/mapa/sur">Sur</Link> 
        <Link to="/mapa/sanBenito">San Benito</Link> 
        <Link to="#">Modelo</Link> 
        <Link to="#">Ley 57</Link> 
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`

`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default MapsNavigation;