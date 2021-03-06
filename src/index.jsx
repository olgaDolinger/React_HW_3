import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/redusers/reducers";
import Provider from "react-redux/es/components/Provider";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "App.jsx";
import * as initialState from "utils/Data";

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
