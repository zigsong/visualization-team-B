import styled from 'styled-components';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 256px);
  column-gap: 42px;
  row-gap: 36px;
  align-items: center;
  padding: 124px;
`;

const ScrollDown = styled.img`
  width: 120px;
`;

const CompareSection = styled.section`
  width: 100%;
  height: 800px;
  padding: 20px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export default { Root, GridContainer, ScrollDown, CompareSection };
