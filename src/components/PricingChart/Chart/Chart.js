import React from 'react';
import styles from './Chart.module.scss'
import LinkShadow from 'components/UI/LinkShadow/LinkShadow';
const Chart = (props) => {
    const img = require(`assets/${props.img}`)
    return (
        <div className={styles.chart}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h3>{props.title}</h3>
                    <p className={styles.price}><span>$</span><span>{props.price}</span><span>p/p</span></p>
                    <ul>
                        <li>Free Hand</li>
                        <li>Gym Fitness</li>
                        <li>Weight Loss</li>
                        <li>Personal Trainer</li>
                        <li>Cycling</li>
                    </ul>
                    <LinkShadow to="/contactus" color="black">Subscribe</LinkShadow>
                </div>
            </div>
        </div>
    );
};



export default Chart;
