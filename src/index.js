import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers/index";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
