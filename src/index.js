import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './container/App';
import {Provider} from "react-redux";
import {Store} from "./store/store";

const app = (
    <Provider store={Store}>
        <App/>
    </Provider>
);

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

