// ENTRY POINT FOR WEBPACK

import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from './components';
import store from './store';
import '../public/index.css';
import "antd/dist/antd.css";
// import 'dotenv/config';

const root = ReactDOMClient.createRoot(document.getElementById('main'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
