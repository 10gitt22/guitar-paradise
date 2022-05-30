import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import AuthProvider from "contexts/AuthContext";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
