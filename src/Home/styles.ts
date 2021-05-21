import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {  
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadein} 2s;
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 256px);
  column-gap: 42px;
  row-gap: 36px;
  align-items: center;
  padding: 124px;
`;

const CompareButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
`;

export default { Root, GridContainer, CompareButton };
