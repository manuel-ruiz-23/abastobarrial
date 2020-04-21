import styled from 'styled-components';

const Hr = styled.div`
  width: 100%;
  max-width: 768px;
  height: 2px;
  background-color: black;
`;

const Title = styled.h3`
text-align: left;
font-family: 'Archivo Black', Arial, sans-serif;
`;

const LandingText = styled.p`
  font-size: 1.15em;
  margin-bottom: 1rem;
`;

const BoldOrange = styled.span`
  font-weight: bold;
  color: #ff9900;
`;

const BoldRed = styled.span`
  font-weight: bold;
  color: #ff5656;
`;

const LandingContainer = styled.div`
  padding-top:1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: left;
  display: flex;
  align-items: left;
  flex-direction: column;
`;

export { LandingContainer, BoldOrange, BoldRed, Title, Hr, LandingText }