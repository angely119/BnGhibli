import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store';

const root = ReactDOMClient.createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <h1>HELLO WORLD</h1>
  </Provider>
);
