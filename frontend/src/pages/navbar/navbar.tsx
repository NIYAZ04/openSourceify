import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from './navlinks';
import './navbar.css';

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div>
            <nav className="NavbarItems">
            <h1 className="logo">
                    <span className="logo-open">open</span>
                    <span className="logo-sourceify">Sourceify</span>
                </h1>
                
                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    {navlinks.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon}></i> {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
