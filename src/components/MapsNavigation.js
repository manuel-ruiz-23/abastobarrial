import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MapsNavigation = ({colonias}) => {
  const { pathname } = useLocation();
  if(pathname==='/'){
    return (
    <LinksContainer>
        {colonias!==undefined && Object.entries(colonias).map(([c,m],colonia) => <MyLink to={'/Mapa/' + c}>{c}</MyLink>)}
    </LinksContainer>
    );
  }
  return (
    <Container>
      <LinksContainer>
      <Lista>
        {colonias!==undefined && Object.entries(colonias).map(([c,m],colonia) => <ListaI><MyLink to={'/Mapa/' + c}>{c}</MyLink></ListaI>)}
      </Lista>
      </LinksContainer>
    </Container>
  );
}
const Lista = styled.ul`
  list-style-type:none;
`;

const ListaI = styled.li`
`
const MyLink = styled(Link)`
  color: black !important;
  font-size: large;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 200px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default MapsNavigation;