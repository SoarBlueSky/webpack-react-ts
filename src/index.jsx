import React from "react";
import ReactDOM from "react-dom";
import App from "./page/HomePage/index";
import { store } from "./store";
import { Provider } from "react-redux";
import "antd/dist/antd.less";
import 'highlight.js/styles/github.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
