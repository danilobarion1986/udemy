import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FunctionalApp from './FunctionalApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FunctionalApp />, document.getElementById('functional-root'));

registerServiceWorker();
