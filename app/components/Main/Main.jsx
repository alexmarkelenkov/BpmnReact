import React, {Component} from 'react';
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import New from "../New/New.jsx";


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/new" render={()=><New diagram="https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn"/>}/>
        </Switch>
    </div>
);

export default Main;