import styled from 'styled-components';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
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
