import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Home from './Home';
import Styled from './App.styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Styled.GlobalStyle />
        <Styled.Root>
          <Home />
        </Styled.Root>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
