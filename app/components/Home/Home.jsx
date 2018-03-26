import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Table } from 'react-bootstrap';
import './Home.css';

class Home extends Component{
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
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </Grid>
        );
    }
}
export default Home;