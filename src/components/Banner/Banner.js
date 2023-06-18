import React from 'react';
import styles from './Banner.module.scss';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

const Banner = () => {
    return (
        <section id={styles.banner}>
            <div className={styles.container}>
                <h3>Find your energy</h3>
                <h2 className={styles.bold}>
                    Make your body 
                </h2>
                <h2 className={styles.thin}>Fit & Perfect</h2>
                <div className={styles.share}>
                    <span>Share</span>
                    <span className={styles.bar}></span>
                    <div className={styles.social}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>  
        </section>
    );
}

export default Banner;
