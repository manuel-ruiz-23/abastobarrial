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
import NavBar from './components/NavBar';
import Colabora from './components/Colabora';
const Mapas = {
    Sur: 'https://www.google.com/maps/d/u/0/embed?mid=14fgrE5GHT-Yj8WuCxYwiI7U-2l8LaQYr',
    'San Benito': 'https://www.google.com/maps/d/embed?mid=14667J7NCp751NLJAXF2RJQ10QdRTj9lD',
    Modelo: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6972.202045826117!2d-110.96211072314259!3d29.102698753268985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8429493570b5%3A0xfc9334b8432ff2ad!2sModelo%2C%20Hermosillo%2C%20Sonora!5e0!3m2!1sen!2smx!4v1588205310937!5m2!1sen!2smx',
    'Ley 57': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6970.895484174975!2d-110.97956787314142!3d29.121981351482578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce86bdfde07f75%3A0x9ec9eac3cc59c645!2sLey%2057%2C%20Hermosillo%2C%20Sonora!5e0!3m2!1sen!2smx!4v1588205368002!5m2!1sen!2smx',
    'Lomas de Madrid': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6970.374861445678!2d-110.98151262586457!3d29.12966160077661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce86c04b19b53d%3A0x23be10d963bac7d8!2sLomas%20de%20Madrid%2C%2083103%20Hermosillo%2C%20Sonora!5e0!3m2!1sen!2smx!4v1588147055510!5m2!1sen!2smx',
}
function App() {
    return (
        <WebContainer>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        <Landing />
                    </Route>
                    <Route path="/Mapa/:colonia">
                        <Map Mapas={Mapas} />
                    </Route>
                    <Route path="/Mapa/">
                        <Map Mapas={Mapas} />
                    </Route>
                    <Route path="/info">
                        <NavBar />
                        <InfoPage />
                    </Route>
                    <Route path="/Colabora">
                        <NavBar />
                        <Colabora />
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
  /* display: flex;
  justify-content: center; */
`;
export default App;
