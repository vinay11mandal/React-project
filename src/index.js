import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './component/Home';
import Friends from './component/Friends';

const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
    	<Switch>
    		<Route exact path="" component={App}/>
        	<Route exact path="/Home" component={Home}/>
        	<Route exact path="/Friends" component={Friends}/>
        </Switch>   
    </BrowserRouter>,
app);
registerServiceWorker();
