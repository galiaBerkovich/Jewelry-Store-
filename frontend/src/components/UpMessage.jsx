import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: pink;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
`;

const UpMessage = () => {
  return <Container>משלוח מהיר עד הבית עד 7 ימי עסקים</Container>;
};

export default UpMessage;