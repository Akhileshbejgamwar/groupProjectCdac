import React from 'react'
// import { Link } from 'react-router-dom';
import '../Components/Navbar.css';
// import '../Components/Login';

export default function Navbar() {
    return (     
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3" href="/"><h3><i>Royal & Luxuary Hotels</i></h3></a>                 
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                 
                            
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/about"><b>About Us</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/about"><b>Contact Us</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/userresgister"><b>Register Customer</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/userlogin"><b>Login</b></a>
                            </li>

                        </ul>     
                    </div>
                </div>
            </nav>
    )
}
