import styled, { createGlobalStyle, keyframes } from 'styled-components';
import bg from './assets/bg_night.png';

const fadein = keyframes`
  from {  
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }
  * {
    font-family: 'NanumBarunGothic', sans-serif;
  }
  html, body {
    height: 100%;
  }
  li {
    list-style: none;
  }
`;

const Root = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  animation: ${fadein} 1s;
`;

export default { GlobalStyle, Root };
