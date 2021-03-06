// Why Did You Render if in debug mode.
// import './dev/wdyr';

import '@capacitor/core'; // Include capacitor js bridge.
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
