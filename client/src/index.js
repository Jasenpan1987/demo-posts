import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import { store } from "./store";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
