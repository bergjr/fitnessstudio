import React from 'react';
import styles from './Menu.module.scss'
import {AiOutlineClose} from 'react-icons/ai'

const Menu = ({isMenuOpen, closeMenu}) => {

    return (
        <nav className={styles.menu} style={isMenuOpen ? {left: '0'} : {left: '-110%'}}>
            <ul>
                <li>
                    <AiOutlineClose className={styles.close} onClick={closeMenu}/>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Schedule</a>
                </li>
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">About us</a>
                </li>
                <li>
                    <a href="/">Gallery</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
