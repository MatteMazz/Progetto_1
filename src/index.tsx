import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { store } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename="/progetto_1">
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
