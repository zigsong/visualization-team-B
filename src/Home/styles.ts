import styled from 'styled-components';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 124px;
`;

const Authors = styled.div`
  font-size: 1.25rem;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, [left-start] 148px);
  row-gap: 36px;
  align-items: center;
`;

const CardItem = styled.li<{ isFlipped: boolean }>`
  z-index: ${({ isFlipped }) => isFlipped && '10'};
`;

const ScrollClick = styled.div`
  margin-top: 124px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: 6px 24px;
  transform: translateY(-48px);
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    transform: translateY(-48px) scale(1.1);
  }

  transition: transform 0.4s;
`;

const CompareSection = styled.section<{ isShowing: boolean }>`
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
  border-bottom: 2px solid #fff;
  padding: 12px 48px;
  margin: 24px 0;
  color: #fff;
`;

export default {
  Root,
  Authors,
  GridContainer,
  CardItem,
  ScrollClick,
  CompareSection,
  CompareTitle,
};
