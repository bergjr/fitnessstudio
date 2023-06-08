import React, { useState } from 'react';
import Logo from './Logo/Logo';
import styles from './NavBar.module.scss';
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import Menu from './Menu/Menu';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const closeMenu = () => {
        console.log('entrou');
        setIsMenuOpen(false)
    }

    return (
        <header id={styles.header}>
            <Logo />
            <nav>    
                <ul>
                    <li><AiOutlineMenu className={styles.icon} onClick={() => {setIsMenuOpen(!isMenuOpen)}}/></li>
                    <li><BsFillPersonFill className={styles.icon} /></li>
                    <li><AiOutlineQuestionCircle className={styles.icon} /></li>
                </ul>
            </nav>
            <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </header>
    );
}

export default NavBar;
