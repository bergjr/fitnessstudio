import React, { useEffect } from 'react';
import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import AboutUs from 'components/AboutUs/AboutUs';
import styles from './AboutUsPage.module.scss';
import ImageTextBox from 'components/AboutUs/ImageTextBox';

const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <MiniBanner />
            <section id={styles.history}>
            <AboutUs hideButton="true" />
                <section id={styles.summary}>
                    <div className={styles.container}>
                        <ImageTextBox title="Our History" img="fitness.jpg" icon="gym-icon.png">Established in the heart of the bustling city, Fitness Studio has been a beacon of fitness and wellness for over three decades. </ImageTextBox>
                        <ImageTextBox title="Our Legacy" img="aerobics.jpg" icon="muscle-icon.png" direction="reverse">By the early 2000s, the gym underwent a significant expansion, incorporating state-of-the-art facilities, specialized training programs, and a team of experienced trainers.</ImageTextBox>
                        <ImageTextBox title="Your Experience" img="womansback.jpg" icon="sport-icon.png">By the early 2000s, the gym underwent a significant expansion, incorporating state-of-the-art facilities, specialized training programs, and a team of experienced trainers.</ImageTextBox>
                    </div>
                </section>
            </section>
        </>
    );
}

export default AboutUsPage;
