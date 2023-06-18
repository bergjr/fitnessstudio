import React from 'react';
import styles from './Classe.module.scss';
const Classe = (props) => {
    const img = require(`assets/${props.img}`)
    
    return (
        <li className={styles['class']} style={{backgroundImage: `url(${img})`}}>
                <div className={styles.icon}></div>
                <div className={styles.text}>
                    <h3>{props.exercise}</h3>
                    <h4>{props.time}</h4>
                </div>    
        </li>
    );
}

export default Classe;
