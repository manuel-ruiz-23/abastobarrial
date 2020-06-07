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
        <Colabora
          href="mailto:abastobarrial@gmail.com?subject=Colabora&body=Gracias%20por%20ponerte%20en%20contacto%20con%20nosotros%2C%20rellena%20el%20formulario%20para%20darte%20de%20alta%20en%20el%20directorio.%0A%0AT%C3%ADtulo%3A%0A%0AColonia%3A%0A%0ADirecci%C3%B3n%3A%0A%0ADescripci%C3%B3n%3A%0A%0ACategor%C3%ADa%3A%20(Alimentos%7CBelleza%7CRopa%7CCultura%7CAutomotriz%7CEscolares)%0A%0AInformaci%C3%B3n%20de%20contacto%3A%20(correo%20electronico%20%7Cnumero%20telefono)%0A%0A"
          target="_blank"
        >
          Colabora
        </Colabora>
      </Links>
    </Container>
  )
};

const Colabora = styled.a`
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 6px 28px;

  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  /* principal */

  color: #594EF2;
`;

const Logo = styled.img`
  height: 72px;
  width: auto;
  margin-left: 5%;
`;

const Container = styled.div`
  height: calc(64px + 16px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #594EF2;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
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