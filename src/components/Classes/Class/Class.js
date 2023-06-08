import React from 'react';
import styles from './Class.module.scss';
const Class = (props) => {
    const img = require(`assets/${props.img}`)
    
    return (
        <div className={styles['class']}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}}>
                {/* <img src={img} alt={props.exercise} /> */}
            </div> 
            <div className={styles.icon}></div>
            <div className={styles['class__text']}>
                <h3>{props.exercise}</h3>
                <h4>{props.time}</h4>
            </div>
        </div>
    );
}

export default Class;
