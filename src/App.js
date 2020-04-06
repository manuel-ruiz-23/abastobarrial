import React from 'react';
import styled from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './components/Landing';
import Map from './components/Map';

function App() {
  return (
    <WebContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/mapa/:colonia">
            <Map/>
          </Route>
        </Switch> 
      </Router>
    </WebContainer>
  );
};

const WebContainer = styled.div`
  height: 100%;
  background-color: #ffebd9;
`;

export default App;
