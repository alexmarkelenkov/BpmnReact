import React from 'react';
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
import {Switch, Route} from 'react-router-dom';
import New from "../New/New.jsx";
import Modify from "../Modify/Modify.jsx"

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/new" render={()=><New diagram="https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn"/>}/>
            <Route path="/new/:id" component={Modify} />
        </Switch>
    </div>
);

export default Main;