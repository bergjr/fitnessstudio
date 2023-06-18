import React from 'react';
import styles from './MenuDesktop.module.scss';
import { NavLink } from 'react-router-dom';
const MenuDesktop = () => {
    return (
        <ul className={styles['main-menu']}>
            <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Home</NavLink></li>
            <li><NavLink>Schedule</NavLink></li>
            <li><NavLink>Contact us</NavLink></li>
            <li><NavLink>About us</NavLink></li>
            <li><NavLink>Gallery</NavLink></li>
            <li><NavLink  to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Pricing</NavLink></li>
        </ul>
    );
}

export default MenuDesktop;
