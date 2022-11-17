import React from "react";
import styled from "styled-components";
import UpMessage from "../components/UpMessage";
import Bottom from "../components/Bottom";
import LinksBox from "../components/LinksBox";
import Wishlist from "../components/Wishlist";
import { useLocation } from "react-router";


const Container = styled.div``;

const Containerer = styled.div`
  height: 60vh;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: px;
  margin-bottom: px;
  align-items: flex start;
  justify-content: start;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  align-items: center;
  justify-content: ;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;





const WishList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    return (
      <Container>
        <UpMessage />
        <LinksBox />
        <Containerer>
        <Title>Wishlist:</Title>
            <Title>{cat}</Title>
            <FilterContainer>
            </FilterContainer>
        <Wishlist cat={cat} />
        </Containerer>
        <Bottom/>
      </Container>
    );
  };
  
  export default WishList;