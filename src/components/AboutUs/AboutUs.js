import React from 'react';
import styles from './AboutUs.module.scss';
import QualityBox from './QualityBox';
import LinkShadow from 'components/UI/LinkShadow/LinkShadow';
import girl from 'assets/woman-sprinting.png';
import circle from 'assets/semicircle.png';
import wind from 'assets/icons/wind-icon.png';
import running from 'assets/running-text.png';

const AboutUs = (props) => {
    
    return (
        <section id={styles.aboutus}>
            <div className={styles.container}>
                <div className={styles['text-container']}>
                    <h2>About Us</h2>
                    <h1>Take Your Health And Body To Next Level</h1>
                    <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                    <div className={styles.qualities}>
                        <QualityBox title="Modern Machines" img="machine-icon.png" />
                        <QualityBox title="New Equipment" img="sport-icon.png" />
                        <QualityBox title="Professional Trainers" img="trainer-icon.png" />
                    </div>
                    {!props.hideButton && <LinkShadow to="/aboutus" color="black">Start tour</LinkShadow>}
                </div>
                <div className={styles['image-container']}>
                    <img className={styles.running} src={running} alt="Woman Sprinting" /> 
                    <img className={styles.girl} src={girl} alt="Woman Sprinting" /> 
                    <img className={styles.circle} src={circle} alt="Woman Sprinting" /> 
                    <img className={styles.icon} src={wind} alt="Woman Sprinting" /> 
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
