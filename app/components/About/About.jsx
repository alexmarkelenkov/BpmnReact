import React, {Component} from 'react';
import { Jumbotron , Grid} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./About.css";

class About extends Component{
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h2>BpmnJS</h2>
                    <p>Lorem ipsum</p>
                </Jumbotron>
            </Grid>
        );
    }
}

export default About;