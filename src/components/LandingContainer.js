/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Landing from './Landing';
import Footer from './Footer';

export default function LandingContainer() {
    return (
        <LandingFrame>
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                    <Landing />
                    <Footer />
                </div>
                <div className="col-md-6">
                    <img src="/landing-tabb.png" />
                </div>
                
            </div>
        </LandingFrame>
    )

}
const LandingFrame = styled.div`
  width: 100vw;
  height:100vh;
  display:flex;
  flex-direction: column;
  background-color: #594EF2 !important;
>div>div:nth-child(1){
    display:flex;
    flex-wrap: wrap;
}
`;
const Tabb = styled.img`
    src: url('/landing-tabb.png')
    background:url('/landing-tabb.png') no-repeat;
`;
