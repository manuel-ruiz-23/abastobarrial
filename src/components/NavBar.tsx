import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    
    <Container>
      <Logo src={require('../assets/logo.png')} alt="abasto barrial"/>
      <Links>
      {pathname!=='/' && <MyLink to="/">Inicio</MyLink>}
      {!pathname.startsWith('/Mapa')  && <MyLink to="/Mapa">Mapa</MyLink>}
      {!pathname.startsWith('/Info') && <MyLink to="/Info">Info</MyLink>
}
      </Links>
    </Container>
  )
};


const Logo = styled.img`
  height: 64px;
  width: auto;
  margin-left: 16px;
`;

const Container = styled.div`
  height: calc(64px + 16px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: left;
`;

const Links = styled.div`
  display: flex;
  width: max-content;
  padding-right: 16px;
`;

const MyLink = styled(Link)`
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  margin-right: 16px;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;
export default NavBar;