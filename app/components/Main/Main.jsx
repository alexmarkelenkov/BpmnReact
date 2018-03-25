import React, {Component} from 'react';
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
import { BrowserRouter, Switch, Route} from 'react-router-dom';



class Main extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default Main;