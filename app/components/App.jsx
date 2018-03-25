import React, {Component} from 'react';
import Main from "./Main/Main.jsx";
import Header from "./Header/Header.jsx";
import { BrowserRouter } from 'react-router-dom';


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;