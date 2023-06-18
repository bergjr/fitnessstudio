import React from 'react';
import styles from './Footer.module.scss'
import Logo from 'components/NavBar/Logo/Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={styles.container}>
                <div className={styles['inner-container']}>
                    <Logo />
                    <p>
                    Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.   
                    </p>
                    <div className={styles.social}>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                    <p>
                        Privacy Policy | © 2023
                    </p>
                    <p>
                        Fitness Studio
                    </p>
                </div>
                <div className={`${styles["inner-container"]} ${styles["inner-container--border"]}`}>
                    <h2>Our Classes</h2>
                    <ul>
                        <li>
                            <p>Fitness</p>
                        </li>
                        <li>
                            <p>Aerobics</p>
                        </li>
                        <li>
                            <p>Swimming</p>
                        </li>
                        <li>
                            <p>Jumping</p>
                        </li>
                    </ul>
                </div>
                <div className={styles["inner-container"]}>
                    <h2>Opening Hours</h2>
                    <ul>
                        <li>
                            <p className={styles.bold}>Monday - Friday</p>
                            <p>09:00 to 22:00</p>
                        </li>
                        <li>
                            <p className={styles.bold}>Saturday </p>
                            <p>10:00 to 21:00</p>
                        </li>
                        <li>
                            <p className={styles.bold}>Sunday </p>
                            <p>12:00 to 20:00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>    
    );
}

export default Footer;
