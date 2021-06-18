import styled from 'styled-components';

const Root = styled.div`
  user-select: none;
  width: 196px;
`;

const FrontWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.darkNavy};
  cursor: pointer;
`;

const FrontImage = styled.img`
  width: 100%;
  height: auto;
`;

const BackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 326px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.white} 35%,
    ${(props) => props.theme.colors.darkNavy}
  );
  border-radius: 8px;
  font-size: 1.65rem;
  box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.darkNavy};
  cursor: pointer;
`;

const BackImage = styled.img`
  flex: 1;
  padding: 0 12px;
  object-fit: contain;
`;

const BackTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 0 0 8px 8px;
  color: ${(props) => props.theme.colors.darkNavy};
  box-shadow: 0 -2px 4px ${({ theme }) => theme.colors.darkNavy};
`;

export default {
  Root,
  FrontWrapper,
  FrontImage,
  BackWrapper,
  BackImage,
  BackTitle,
};
