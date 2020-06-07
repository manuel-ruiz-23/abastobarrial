import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <Container>
      <Logo src={require('../assets/logo-wide-i.png')} alt="abasto barrial"/>
      <Links>
        <MyLink to="/">Inicio</MyLink>
        <MyLink to="/Mapa">Mapa</MyLink>
        <MyLink to="/Info">Info</MyLink>
        {/* <MyLink to="/Colabora">Colabora</MyLink> */}
      </Links>
    </Container>
  )
};


const Logo = styled.img`
  height: 94px;
  width: auto;
  margin-left: 5%;
`;

const Container = styled.div`
  height: calc(64px + 16px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  width: max-content;
  margin-right: 5%;
`;

const MyLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  margin-right: 16px;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;
export default NavBar;