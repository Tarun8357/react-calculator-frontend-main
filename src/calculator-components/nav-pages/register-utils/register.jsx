import React from "react";
import './register.css';
// import cartoon from './download.png'

const Register =()=>{
    return (
        <div>
            {/* <img src={cartoon}></img> */}
            <form action="/register" method="post">
            <h1>Welcome to Register Page</h1>
            <div><input type="text" placeholder="Enter Your Name" className="registerPage" /></div>
            <div><input type="email" placeholder="Enter Your Email" className="registerPage"/></div>
            <div><input type="text" placeholder="Enter Role" className="registerPage"/></div>
            <div><input type="password" placeholder="Enter Password" className="registerPage"/></div>
            <div><input type="submit" className="submitBtn" placeholder="register"/></div>
            </form>
        </div>
    );
}
export default Register;