/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Landing from './Landing';
import Footer from './Footer';

export default function LandingContainer() {
    return (
        <LandingFrame>
            <Info>
                <NavBar />
                <Landing />
                <Footer />
            </Info>
            {/* <LandingImg src="/landing-tabb.png" /> */}
        </LandingFrame>
    )

}
const LandingFrame = styled.div`
  width: 100vw;
  height:100vh;
  display:flex;
  /* flex-wrap: wrap; */
  background-image: url('/landing-tabb.png');
  
  
  `;

const Info = styled.div`
    height: 100vh;
    background-color: #594EF2;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    max-width: 50vw;

    @media (max-width: 920px) {
        max-width: 100vw;
    }
`

const LandingImg = styled.img`
    max-height: 100vh;
`;
