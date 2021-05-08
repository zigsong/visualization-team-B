import styled from 'styled-components';

const Root = styled.main`
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 256px);
  column-gap: 42px;
  row-gap: 36px;
  align-items: center;
  padding: 124px;
`;

export default { Root, GridContainer };
