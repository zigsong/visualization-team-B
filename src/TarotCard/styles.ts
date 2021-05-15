import styled from 'styled-components';

const Root = styled.div`
  margin: 0px;
  user-select: none;
`;

const FrontWrapper = styled.div`
  cursor: pointer;
`;

const FrontImage = styled.img``;

const BackWrapper = styled.div`
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.white} 35%,
    ${(props) => props.theme.colors.darkNavy}
  );
  border: 2px solid ${(props) => props.theme.colors.darkNavy};
  border-radius: 8px;
  font-size: 2rem;
  cursor: pointer;
`;

const BackImage = styled.img`
  flex: 1;
  object-fit: contain;
`;

const BackTitle = styled.div`
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
  BackWrapper,
  BackImage,
  BackTitle,
};
