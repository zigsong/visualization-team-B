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

const ScrollClick = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: 6px 24px;
  transform: translateY(-48px);
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const CompareSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(240, 240, 240, 100);
`;

const CompareTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 2px solid #000;
  padding: 12px 48px;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.darkNavy};
`;

export default {
  Root,
  GridContainer,
  ScrollClick,
  CompareSection,
  CompareTitle,
};
