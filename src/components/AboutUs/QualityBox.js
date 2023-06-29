import React from 'react';
import styles from './QualityBox.module.scss';

const QualityBox = (props) => {
    const img = require(`assets/icons/${props.img}`)

    return (
        <div className={styles.quality}>
            <img src={img} alt={props.title}/>
            <h3>{props.title}</h3>    
        </div>
    );
}

export default QualityBox;
