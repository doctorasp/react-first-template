import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}></Route>
        </div>
    </Router>
    , 
    document.getElementById('app')
);