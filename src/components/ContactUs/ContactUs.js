import React from 'react';
import styles from './ContactUs.module.scss'
import InfoBox from './InfoBox';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import FormContact from './FormContact';
const ContactUs = () => {
    return (
        <section id={styles.contact}>
            <div className={styles.container}>
                <div className={styles['general-infos-container']}>
                    <h1>We are here to help you shape your body.</h1>
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
                <div className={styles['form-container']}>
                    <FormContact />
                </div>
            </div>
            <iframe
                title="map"
                width="100%"
                height="420"
                style={{border: "0",
                marginTop: "4rem"}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Ds12jHtc7qrX3B0T0L65x1sEAEP5CiI
                    &q=Bolton+Street,Dublin+Dublin">
                </iframe>
        </section>    
    );
}

export default ContactUs;
