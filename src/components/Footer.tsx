import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <Container>
            <Hashtag>#Abasto Barrial </Hashtag>
            <div>
                    <MyLink to="https://facebook.com/abastobarrialhmo"><SocialLogo src="/facebook.png" /> </MyLink>
                <MyLink to="https://instagram.com/abastobarrialhmo"><SocialLogo src="/instagram.png" /> </MyLink>
            </div>
        </Container>
    )
};


const Hashtag = styled.p`
  color: white;
  width: auto;
  margin-left: 5%;
`;

const Container = styled.div`
align-self: flex-end;
display:flex;
flex-direction: row;
  justify-content: space-between;

width:100% !important;
height:40px;
max-height: 40px;
>div{
    display:flex;
    align-content: flex-end;
    flex-direction:row;
}

 `

const SocialLogo = styled.img`
  height: 32px;
  margin-right: 5%;
`;

const MyLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  margin-right: 16px;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export default Footer;