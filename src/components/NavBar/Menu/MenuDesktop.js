import React from 'react';
import styles from './MenuDesktop.module.scss';
import { NavLink } from 'react-router-dom';
const MenuDesktop = () => {
    return (
        <ul className={styles['main-menu']}>
            <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Home</NavLink></li>
            <li><NavLink to="/schedule" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Schedule</NavLink></li>
            <li><NavLink to="/classes" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Classes</NavLink></li>
            <li><NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Contact Us</NavLink></li>
            <li><NavLink to="/aboutus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>About</NavLink></li>
            <li><NavLink  to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>Pricing</NavLink></li>
        </ul>
    );
}

export default MenuDesktop;
