import React, { useEffect } from 'react';
import styles from './Menu.module.scss'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Menu = ({isMenuOpen, closeMenu}) => {
    
    return (
        <nav className={styles.menu} style={isMenuOpen ? {left: '0'} : {left: '-110%'}}>
            <ul>
                <li>
                    <AiOutlineClose className={styles.close} onClick={closeMenu}/>
                </li>
                <li><NavLink onClick={closeMenu} to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Home</NavLink></li>
                <li><NavLink onClick={closeMenu} to="/schedule" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Schedule</NavLink></li>
                <li><NavLink onClick={closeMenu} to="/classes" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Classes</NavLink></li>
                <li><NavLink onClick={closeMenu} to="/contactus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Contact Us</NavLink></li>
                <li><NavLink onClick={closeMenu} to="/aboutus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>About</NavLink></li>
                <li><NavLink onClick={closeMenu} to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Pricing</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;
