import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import App from './App';
import {store} from "./app/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

