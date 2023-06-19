import React from 'react';
import styles from './Banner.module.scss';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import LinkShadow from 'components/UI/LinkShadow/LinkShadow';

const Banner = () => {
    return (
        <section id={styles.banner}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>Find your energy</h3>
                    <h2 className={styles['bold-red']}>
                        Make your body 
                    </h2>
                    <h2 className={styles.thin}>Fit & Perfect</h2>
                    <LinkShadow to="/classes">Our Classes</LinkShadow>
                </div>
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
