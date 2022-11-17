import styled from "styled-components";
import Login from "./Login";
import { Link } from "react-router-dom";
import UpMessage from "../components/UpMessage";
import LinksBox from "../components/LinksBox";
import Bottom from "../components/Bottom";

const Container = styled.div``;
const Containerr = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media1.popsugar-assets.com/files/thumbor/41XIlaP_in3mv-6lSDYxPor9b2M/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/24/945/n/1922564/3bc3413c446fde6c_HIGH_RGB_AU19_PANDORAME_MBB_02_RGB/i/millie-bobby-brown-pandora-jewelry-campaign-2019.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 50px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 10px 10px 10px 0px;
  padding: 15px;
`;


const Button = styled.button`
  width: 150%;
  border: none;
  padding: 15px 20px;
  background-color: pink;
  color: black;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
    <UpMessage />
    <LinksBox />
      <Containerr>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
            <Link to="/login">
              <Button>CREATE ACCOUNT</Button>
            </Link>
        </Form>
      </Wrapper>
      </Containerr>
    <Bottom/>
    </Container>
  );
};

export default Register;
