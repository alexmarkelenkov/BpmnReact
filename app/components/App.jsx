import React from 'react';
import Main from "./Main/Main.jsx";
import Header from "./Header/Header.jsx";
import { BrowserRouter } from 'react-router-dom';


const App = () => (
    <BrowserRouter>
        <div className={'cont'}>
            <Header/>
            <Main/>
        </div>
    </BrowserRouter>
);


export default App;