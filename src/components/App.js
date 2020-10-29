import React from "react";
// import {BrowserRouter as Router} from "react-router-dom"

import Navbar from "./Navbar"
import AuthLogTable from "./AuthLogTable";
import Footer from "./Footer";

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <Navbar/>
                <AuthLogTable/>
                <Footer/>
            </div>
        );
        
        
    }
}

export default App;