import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/actions/configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import { BrowserRouter } from "react-router-dom";

const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
