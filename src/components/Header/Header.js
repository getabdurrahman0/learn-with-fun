import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (



<div className='header-container'>
<nav className="navbar navbar-expand-lg">
    <div className="container">

        <NavLink className="navbar-brand fs-1 " to="/">Learn with Fun</NavLink>


        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services"> Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/teachers">Instructor</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>






    );
};

export default Header;