import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'; 
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hospital from './components/Hospital';
import Login from './components/Login'; 

// const routing = (
//     <Router>
//         <div>
//             <Route exact path="/" component={Login} />
//             <Route path="/hospital" component={Hospital} />
//         </div>
//     </Router>
// )

ReactDOM.render(<Login />, document.getElementById('root'));

serviceWorker.unregister();
