import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 18px;
}

:root{
  --header-height: 100px
}
`;

const store = setupStore();

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
