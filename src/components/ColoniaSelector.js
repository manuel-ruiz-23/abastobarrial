import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

export default function ColoniaSelector() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  function handleColoniaClick(col) {
    history.push(col)
    setOpen(false);
  }

  return (
    <ColoniaSelectorStyle>
      <Toggler onClick={() => setOpen(!open)}>Ver una colonia</Toggler>
      {open && ( 
        <ColoniasContainer>
          <ColoniaButton
            onClick={() => handleColoniaClick('/mapa/sur')}
          >Sur</ColoniaButton>
          <ColoniaButton
            onClick={() => handleColoniaClick('/mapa/sanBenito')}
          >San Benito</ColoniaButton>
          <ColoniaButton
            onClick={() => handleColoniaClick('/mapa/modelo')}
          >Modelo</ColoniaButton>
          <ColoniaButton
            onClick={() => handleColoniaClick('/mapa/ley57')}
          >Ley 57</ColoniaButton>
        </ColoniasContainer>
      )} 
    </ColoniaSelectorStyle>
  );
}

const ColoniaSelectorStyle = styled.div`
  position: absolute;
  z-index: 100;
  font-family: sans-serif;
`;

const Toggler = styled.div`
  width: 128px;
  padding: 8px;
  margin: 4px;
  margin-bottom: 0;
  color: white;
  background-color: #fa9a00;
  border-radius: 8px;
`;

const ColoniaButton = styled.span`
  padding: 8px;
  color: white;
  width: 120px;
  margin-left: 8px;
  margin-top: -2px;
  background-color: #fa9a00;
  &:hover {
    background-color: #d48831;
  }
`;

const ColoniasContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 8px;
`;