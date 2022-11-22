import React,{ StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import store from './actions/store';

import App from '@components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);