import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <section id={styles.banner}>
            <div className={styles.container}>
                <h3>Find your energy</h3>
                <h2 className={styles.bold}>
                    Make your body 
                </h2>
                <h2 className={styles.thin}>Fit & Perfect</h2>
            </div>  
        </section>
    );
}

export default Banner;
