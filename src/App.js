import React, { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './components/Landing';
import Map from './components/Map';
import Login from './components/Login';

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
          <Route path="/login">
            <Login />
          </Route>
        </Switch> 
      </Router>
    </WebContainer>
  );
};

const WebContainer = styled.div`
  height: 100%;
  background-color: white;
`;

export default App;
