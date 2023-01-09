import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import reducers from "./reducers";

import { Provider } from "react-redux"; // component made in react-redux library
import { createStore } from "redux";

//Add the Provider tag at the top of the component hierarchy and pass a reference of the redux store, where the reducers are stored.
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, // The components wrapped in provider tag can now use the Connect tag to communicate with the provider, thus enabling all components to get access to redux store.
  document.querySelector("#root")
);
