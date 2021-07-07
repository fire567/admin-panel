import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reducers from "./Components/reducers/index"
import thunk from "redux-thunk";
import {CookiesProvider} from "react-cookie";
import { createStore, applyMiddleware } from "redux";
import { HashRouter } from "react-router-dom";
import { Provider }  from "react-redux";

const store= createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <CookiesProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </CookiesProvider>
  </HashRouter>,
  document.getElementById('root')
);

