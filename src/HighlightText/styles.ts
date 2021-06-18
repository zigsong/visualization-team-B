import styled from 'styled-components';

const Root = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 2px;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
    height: 8px;
    background-color: #10697e;
    opacity: 0.3;
  }
`;

export default { Root };
