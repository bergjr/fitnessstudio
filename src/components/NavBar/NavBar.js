import React, { useEffect, useState } from 'react';
import Logo from './Logo/Logo';
import styles from './NavBar.module.scss';
import MenuDesktop from './Menu/MenuDesktop';
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillPersonFill, BsFillPlusSquareFill } from 'react-icons/bs';
import Menu from './Menu/Menu';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import AboutHeader from './AboutHeader/AboutHeader';



const NavBar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    const closeAbout = () => {
        setIsAboutOpen(false);
    }

    const [scrollState, setScrollState] = useState("top");
    
    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
            if (scrollState !== "amir") setScrollState("amir")
        } else {
            if (scrollState !== "top") setScrollState("top")
        }
        })
        return () => {
          document.removeEventListener("scroll", listener)
        }
      }, [scrollState])


    const isDesktop = useMediaQuery({query: '(min-width: 1220px)'});
    const openMenu = () => {
        if(isAboutOpen) {
            setIsAboutOpen(false);
        }
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header id={styles.header} style={{backgroundColor: `${scrollState !== 'top' ? '#000000' : 'transparent'}`}}>
            <Logo />
            <nav className={styles['main-nav']}>    
                {isDesktop && <MenuDesktop />}
                <ul className={styles['menu-mobile']}>
                    {!isDesktop && <li><AiOutlineMenu className={styles.icon} onClick={openMenu}/></li>}
                    {/* <li><BsFillPersonFill className={styles.icon} /></li> */}
                    <li><AiOutlineQuestionCircle className={styles.icon} onClick={() => setIsAboutOpen(!isAboutOpen)}/></li>   
                    <li>
                        <div className={styles.subscribe}>
                            <Link to="/contactus"><BsFillPlusSquareFill size="30"/> Join a class now</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <AboutHeader closeAbout={closeAbout} isAboutOpen={isAboutOpen} />
        </header>
    );
}

export default NavBar;

