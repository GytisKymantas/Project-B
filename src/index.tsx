import React, { StrictMode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import store from 'state/store';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin:0;
    }

    body {
        overflow:hidden auto;
    }
    html {
        font-family: 'PT Sans';
    }
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
