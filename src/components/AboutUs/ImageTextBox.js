import React from 'react';
import styles from './ImageTextBox.module.scss';

const ImageTextBox = (props) => {
    const img = require(`assets/${props.img}`);
    const icon = require(`assets/icons/${props.icon}`)
    return (
        <div className={`${styles.container} ${props.direction ? styles['container--reverse'] : ''}`}>
            <div className={styles['text-box']}>
                <div className={styles['icon-container']}>
                    <img src={icon} alt="icon" />
                </div>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
            </div>
            <div className={styles['image-box']} style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
            </div>
        </div>
    );
}

export default ImageTextBox;
