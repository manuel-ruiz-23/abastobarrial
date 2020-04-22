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
import Login from './components/Login';
import InfoPage from './components/InfoPage';

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
          <Route path="/info">
            <InfoPage />
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
  display: flex;
  justify-content: center;
`;

export default App;
