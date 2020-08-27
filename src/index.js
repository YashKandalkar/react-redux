import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers/reducer";

const puns = [
  {
    id: 0,
    pun: "Don't believe in JS dev's promises, they might just reject it"
  },
  {
    id: 1,
    pun: "If you can't React maybe just Vue it"
  }
];

const punStore = {
  creator: "Yash",
  puns,
  filterText: ''
};

const store = createStore(reducer, punStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
