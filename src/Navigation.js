import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (

        <div className='navDiv'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Me</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                </li>
            </ul>
        </div>

    );
}

export default Navigation;
