import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Table } from 'react-bootstrap';
import './Home.css';
import $ from 'jquery';
import New from "../New/New.jsx";

class Home extends Component{

    constructor(){
        super();
        this.state = {
            diagrams: []
        };

        $.get("/all", response => {

            this.setState({diagrams: response});
            console.log(this.state.diagrams);
        });
    }

    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to BpmnJS</h2>
                    <p>Here you can build your own bpmn diagrams and save them </p>
                    <Link to="/about">
                        <Button bsStyle="primary">Learn More</Button>
                    </Link>
                </Jumbotron>
                <Table striped bordered condensed hover className={"table-diagrams"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Modify</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.diagrams.map(x =>
                        <tr>
                            <td>{x.id}</td>
                            <td>diagram{x.id}</td>
                            <td>
                                <Link to={`/new/${x.id}`}>
                                    <Button bsStyle="primary">
                                        Modify
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Grid>
        );
    }


}
export default Home;