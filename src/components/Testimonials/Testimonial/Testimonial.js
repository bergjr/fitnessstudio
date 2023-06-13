import React from 'react';
import styles from './Testimonial.module.scss';

const Testimonial = (props) => {
    const img = require(`assets/${props.img}`)
    return (
        <div className={styles.testimonial}>
            <div className={styles['image-container']}>
                <img src={img} alt="test" />
            </div>
            <div className={styles['text-container']}>
                <p>“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”
                </p>
                <h3>Ubergue A.</h3>
                <h4>CEO of Andrade ltda.</h4>
            </div>    
        </div>
    );
}

export default Testimonial;
