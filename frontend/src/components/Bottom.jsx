import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Bottom = () => {
    return (
      <Container>
        <Left>
          <Logo>GALRON JEWELRY</Logo>
          <Desc>
            Welcome to the first website of Yaron and Galia, we are happy to have you here! Hope you enjoy our products and wish you a happy summer time...
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/Cart">Cart</Link></ListItem>
            <ListItem><Link to="/ProductList">Products</Link></ListItem>
          
            <ListItem>My Account</ListItem>
            <ListItem><Link to="/About">About</Link></ListItem>
            <ListItem><Link to="/Login">Login</Link></ListItem>
            <ListItem><Link to="/about">Wishlist</Link></ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> אוניברסיטת רייכמן 
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 0504492499
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> galiaberk1998@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Bottom;
  