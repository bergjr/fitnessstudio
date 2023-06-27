import React from 'react';
import styles from './ContactUs.module.scss'
import InfoBox from './InfoBox';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import FormContact from './FormContact';
const ContactUs = () => {
    return (
        <section id={styles.contact}>
            <div className={styles.container}>
                <div className={styles['general-infos']}>
                    <h1>We are here for help you! To Shape Your Body.</h1>
                    <p className={styles.text}>At Fitness Studio, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                    <div className={styles.infos}>
                        <InfoBox title="Dublin, Ireland"><p>12 Bolton Street, Dublin</p><p> D01 CD47, Ireland</p></InfoBox>
                        <InfoBox title="Opening Hours"><p>Mon to Fri: 7:30 am — 1:00 am</p>
                        <p>Mon to Fri: 7:30 am — 1:00 am</p></InfoBox>
                        <InfoBox title="Information"><p>+800-123-4567</p><p>fitnessstudio@studiomail.com</p></InfoBox>
                        <InfoBox title="Social Media">
                            <a href="http://facebook.com"><BsFacebook /></a>
                            <a href="http://instagram.com"><BsInstagram /></a>
                            <a href="http://twitter.com"><BsTwitter /></a>
                            <a href="http://linkedin.com"><BsLinkedin /></a>
                        </InfoBox>
                    </div>
                </div>
                <div>
                    <FormContact />
                </div>
            </div>
        </section>    
    );
}

export default ContactUs;
