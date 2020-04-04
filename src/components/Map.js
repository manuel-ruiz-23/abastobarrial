/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import {
  Link,
  useParams
} from "react-router-dom"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 44px;
  overflow: hidden;
  >iframe{
    top: 0;
    left: 0;
    width: 90vw;
    height: 78vh;
  }
`;

const CommingSoon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  padding-top: 44px;
  font-size: 2rem;
  color: #fa9a00;
`;

const Mapas = {
  sur: 'https://www.google.com/maps/d/u/0/embed?mid=14fgrE5GHT-Yj8WuCxYwiI7U-2l8LaQYr',
  sanBenito:'https://www.google.com/maps/d/embed?mid=14667J7NCp751NLJAXF2RJQ10QdRTj9lD',
  modelo: undefined,
  ley57: undefined,
}

export default function Map() {
  const { colonia } = useParams();

  console.log('colonia', colonia);

  if (!(colonia in Mapas)) {
    return <CommingSoon>No tenemos esa colonia en nuestra base de datos :(</CommingSoon>;
  }

  if (!Mapas[colonia]){
    return <CommingSoon>Proximamente!!</CommingSoon>;
  }

  return (
    <Container>
      <iframe
        src={Mapas[colonia]}
        width="640"
        height="480"
      ></iframe> 
    </Container>
  );
}