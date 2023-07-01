import React from 'react';
import styles from './Testimonial.module.scss';
import quote from 'assets/quote.png';

const Testimonial = (props) => {
    const img = require(`assets/${props.img}`)
    return (
        <div className={styles.testimonial}>
            <div className={styles['image-container']} style={{backgroundImage: `url(${img})`}}>
                {/* <img src={img} alt="test"/> */}
            </div>
            <div className={styles['text-container']}>
                <div>
                    <img src={quote} alt="Aspas" />
                </div>
                <p>“I've been a member of Fitness Studio for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”
                </p>
                <h3>Ubergue A.</h3>
                <h4>CEO of Andrade ltda.</h4>
            </div>    
        </div>
    );
}

export default Testimonial;
