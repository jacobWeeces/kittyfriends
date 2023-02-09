import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card.js';
import App from './containers/App';
import 'tachyons';
import { robots } from './robots';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();