import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <nav className='d-flex justify-content-between navbg p-2'>
            <div> <h3 className='ms-5 fw-bold '>Math Academy</h3></div>
            <div className=''> <NavLink className='fw-bold mx-4 text-white navlink' to="/home">Home</NavLink>
                <NavLink className='fw-bold text-white mx-4 navlink' to="/service">Service</NavLink>
                <NavLink className='fw-bold text-white mx-4 navlink' to="/skill">Skill</NavLink>
                <NavLink className='fw-bold text-white mx-4 navlink' to="/about">About</NavLink> </div>
        </nav>
    );
};

export default Header;