import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const NavBar = () =>{
    return (
        <div className="navbar">

        <button className="homeBtn"><Link to="/home">Home</Link></button>
        <button className="loginBtn"><Link to="/login">Login</Link></button>
        <button className="registerBtn"><Link to="/register">Register</Link></button>

        </div>


    );
}
export default NavBar;