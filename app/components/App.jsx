import React, {Component} from 'react';
import {browserHistory, Router} from "react-router";



import ReactRouterDOM from 'react-router-dom';

import Main from "./Main.jsx";


const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

class App extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}


export default App;