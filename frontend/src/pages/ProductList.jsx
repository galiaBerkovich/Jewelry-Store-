import styled from "styled-components";
import LinksBox from "../components/LinksBox";
import UpMessage from "../components/UpMessage";
import Products from "../components/Products";
import Bottom from "../components/Bottom";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
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

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];




  return (
    <Container>
      <LinksBox />
      <UpMessage />
      <Title>{cat}</Title>
      <FilterContainer>
      </FilterContainer>
      <Products cat={cat} />
      <Bottom />
    </Container>
  );
};

export default ProductList;
