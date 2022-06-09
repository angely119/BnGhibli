import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from './components';
import store from './store';

const root = ReactDOMClient.createRoot(document.getElementById('main'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
