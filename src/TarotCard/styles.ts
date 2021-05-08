import styled from 'styled-components';

const Root = styled.div`
  width: 256px;
  height: 442px;
  margin: 0px;
  user-select: none;
`;

const FrontWrapper = styled.div`
  cursor: pointer;
`;

const FrontImage = styled.img``;

const BackWrapper = styled.div`
  width: 100%;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.white} 35%,
    ${(props) => props.theme.colors.lightNavy}
  );
  border-radius: 4px;
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
