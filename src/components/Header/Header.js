import './Header.css'
import logo from '../../images/images.png'
import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav><h1>Exercise Tasks</h1></nav>
        </div>
    );
};

export default Header;