import React, { useEffect, useState } from 'react';
import Logo from './Logo/Logo';
import styles from './NavBar.module.scss';
import MenuDesktop from './Menu/MenuDesktop';
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillPersonFill, BsFillPlusSquareFill } from 'react-icons/bs';
import Menu from './Menu/Menu';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const closeMenu = () => {
        console.log('entrou');
        setIsMenuOpen(false)
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

    return (
        <header id={styles.header} style={{backgroundColor: `${scrollState !== 'top' ? '#000000' : 'transparent'}`}}>
            <Logo />
            <nav className={styles['main-nav']}>    
                {isDesktop && <MenuDesktop />}
                <ul className={styles['menu-mobile']}>
                    {!isDesktop && <li><AiOutlineMenu className={styles.icon} onClick={() => {setIsMenuOpen(!isMenuOpen)}}/></li>}
                    <li><BsFillPersonFill className={styles.icon} /></li>
                    <li><AiOutlineQuestionCircle className={styles.icon} /></li>   
                    <li>
                        <div className={styles.subscribe}>
                            <Link to="/contactus"><BsFillPlusSquareFill size="30"/> Join a class now</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </header>
    );
}

export default NavBar;
