import React from 'react'
// import { IoIosFitness } from 'react-icons/io'
import styles from './Logo.module.scss'
import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link className={styles.logo} to="/">
            <div className={styles.img}>
                <img src={logo} alt="Dombbell" />
            </div>
            <div className={styles.text}>
                <h3>Fitness Studio</h3>
                <h4>Your gym center</h4>
            </div>
        </Link> 
    );
}

export default Logo;
