import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/login'; 
import Hospital from './components/Hospital'; 
import Anganwadi from './components/Anganwadi';
import Anganwadi1st from './components/Anganwadi1st';
import School1st from './components/School1st';
import Complaint from './components/Complaint';
import School from './components/School';
import Orphanage from './components/Orphanage';

ReactDOM.render(<School1st />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
