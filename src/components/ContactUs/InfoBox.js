import React from 'react';
import styles from './InfoBox.module.scss'
const InfoBox = (props) => {
    return (
        <div className={styles.infobox}>
            <h3>{props.title}</h3>
            {props.children}  
        </div>
    );
}

export default InfoBox;
