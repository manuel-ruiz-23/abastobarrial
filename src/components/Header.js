import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 65px;
  color: white;
  background: #fa9a00; 
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 32px;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

export default function Header() {
  return (
    <Container>
      <Title>Descubre tu colonia y apoya negocios locales</Title>
      {/* <Title>Consume Local Hmo</Title> */}
    </Container>
  )
}