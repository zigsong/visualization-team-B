import styled from 'styled-components';

const Root = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const StartButton = styled.button`
  color: #fff;
  padding: 8px 20px;
  background-color: #10697e;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.lightNavy};

  &:hover {
    background-color: #1792ad;
  }

  transition: background-color 0.2s;
`;

const Highlight = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 2px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 100%;
    height: 8px;
    background-color: #10697e;
    opacity: 0.5;
    z-index: -1;
  }
`;

export default { Root, StartButton, Highlight };
