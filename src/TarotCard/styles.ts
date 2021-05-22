import styled from 'styled-components';

const Root = styled.div`
  margin: 0px;
  user-select: none;
`;

const FrontWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.darkNavy};
  cursor: pointer;
`;

const FrontImage = styled.img``;

const BackWrapper = styled.div`
  height: 426px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.white} 35%,
    ${(props) => props.theme.colors.darkNavy}
  );
  border-radius: 8px;
  font-size: 2rem;
  box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.darkNavy};
  cursor: pointer;
`;

const BackImage = styled.img`
  flex: 1;
  padding: 0 12px;
  object-fit: contain;
`;

const CardButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 84px;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.darkNavy};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  border-radius: 10px;
  outline: none;
  box-shadow: 2px 2px 4px #333;
  &:hover {
    transform: scale(1.1);
  }
`;

const BackTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 2px solid ${(props) => props.theme.colors.darkNavy};
  border-radius: 0 0 8px 8px;
  color: ${(props) => props.theme.colors.darkNavy};
`;

export default {
  Root,
  FrontWrapper,
  FrontImage,
  CardButton,
  BackWrapper,
  BackImage,
  BackTitle,
};
