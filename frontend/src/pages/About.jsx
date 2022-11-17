import React from "react";
import styled from "styled-components";
import UpMessage from "../components/UpMessage";
import Bottom from "../components/Bottom";
import LinksBox from "../components/LinksBox";

const Container = styled.div``;

const Containerer = styled.div`
  height: 40vh;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: px;
  margin-bottom: px;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

`;const InfoContainer = styled.div`
flex: 9;
padding: 50px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const About = () => {
  return (
    <Container>
      <UpMessage />
      <LinksBox />
      <Containerer>
      <Title>About Galron Jewelry:</Title>
      <InfoContainer><Desc>Welcome to the first website of Yaron and Galia! we are so happy to have you here! Everything started 
      in 'Web Applications' course that we both took and today we have the most beautiful website in the world!
       Hope you enjoy our products and wish you a happy summer time...
       
       with love,
       Yaron and Galia</Desc></InfoContainer></Containerer>
      <Bottom/>
    </Container>
  );
};

export default About;
