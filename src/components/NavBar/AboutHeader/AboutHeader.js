import React from 'react';
import styles from './AboutHeader.module.scss';
import Logo from '../Logo/Logo';
import photo1 from 'assets/mini/photo1.jpg';
import photo2 from 'assets/mini/photo2.jpg';
import photo3 from 'assets/mini/photo3.jpg';
import photo4 from 'assets/mini/photo4.jpg';
import photo5 from 'assets/mini/photo5.jpg';
import photo6 from 'assets/mini/photo6.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const AboutHeader = ({isAboutOpen, closeAbout}) => {
    return (
        <section id={styles['summary']} style={isAboutOpen ? {left: "0"} : {left: "-100%"}}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo />
                    <AiOutlineClose onClick={closeAbout} color="red" className={styles.close} />
                </div>
                <div className={styles['text-container']}>
                    <h2>About Us</h2>
                    <p>Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>
                </div>
                <div className={styles['text-container']}>
                    <h2>Gallery</h2>
                    <div className={styles.gallery}>
                       <img src={photo1} alt="a person in the gym" /> 
                       <img src={photo2} alt="a person in the gym" />
                       <img src={photo3} alt="a person in the gym" />
                       <img src={photo4} alt="a person in the gym" />
                       <img src={photo5} alt="a person in the gym" />
                       <img src={photo6} alt="a person in the gym" />
                    </div>
                </div>
                <div className={styles['text-container']}>
                    <h2>Contact Info</h2>
                    <p>12 Bolton Street, Dublin D01 CD47, Ireland</p>
                    <p>+800-123-4567</p>
                    <p>fitnessstudio@studiomail.com</p>
                </div>
                <div className={styles['text-container']}>
                    <h2>Follow Us</h2>
                    <div className={styles.social}>
                        <a href="http://facebook.com"><BsFacebook /></a>
                        <a href="http://instagram.com"><BsInstagram /></a>
                        <a href="http://twitter.com"><BsTwitter /></a>
                        <a href="http://linkedin.com"><BsLinkedin /></a>
                    </div>
                </div>    
            </div>
        </section>
    );
}

export default AboutHeader;
