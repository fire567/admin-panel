import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reducers from "./Components/reducers/index"
import { createStore, applyMiddleware } from "redux";
import { Provider }  from "react-redux";

const store= createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

