import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import Header from './components/Header';
import Landing from './components/Landing';
import Map from './components/Map';
import ColoniaSelector from './components/ColoniaSelector';



function App() {
  return (
    <Router>
      <WebContainer>
        {/* <Header/> */}
        <ColoniaSelector />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/mapa/:colonia">
            <Map/>
          </Route>
        </Switch> 
      </WebContainer>
    </Router>
  );
};

const WebContainer = styled.div`
  height: 100vh;
  background-color: #ffebd9;
`;

export default App;
