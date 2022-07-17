import React from "react";
import {Link} from "react-router-dom";
import "../Styles/Navbar.css";


    function Navbar() {
        return (
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/DashBoard">DashBoard</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Issues">Issues</Link>
                <Link to="/Reports">Reports</Link>
                <Link to="/Users">Users</Link>
                <Link to="/Login">Log in</Link>
            </div>
        )
    }
    export default Navbar;