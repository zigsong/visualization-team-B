import styled from 'styled-components';

const Root = styled.div`
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const StartButton = styled.button`
  background-color: #4c6778;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.lightNavy};

  &:hover {
    background-color: #374a57;
  }

  transition: background-color 0.2s;
`;

export default { Root, StartButton };
