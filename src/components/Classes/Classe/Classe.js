import React from 'react';
import styles from './Classe.module.scss';
import bag from 'assets/duffle-bag.png'

const Classe = (props) => {
    const img = require(`assets/${props.img}`)
    
    return (

        <li className={styles['classe']}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}}></div>
            <div className={styles.icon}>
                <img src={bag} alt="Red bag"/>
            </div>
            <div className={styles['text']}>
                <h3>{props.exercise}</h3>
                <h4>{props.time}</h4>
            </div>
        </li>
    )
}

export default Classe;
