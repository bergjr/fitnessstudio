import React from 'react';
import styles from './Trainer.module.scss'
import { IoIosArrowUp } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Trainer = (props) => {
    const img = require(`assets/trainers/${props.img}`)
    return (
        <div className={styles.trainer}>
            <div className={styles['image-container']}>
                <img src={img}  alt="Trainer Posing"/>
            </div>
            <div className={styles.info}>
                <div className={styles.arrow}>
                    <IoIosArrowUp size="30" />
                </div>
                <h3>{props.name}</h3>
                <h4>{props.type}</h4>
                <div className={styles.social}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                <div className={styles.bar}></div>
            </div>   
        </div>
    );
}

export default Trainer;
