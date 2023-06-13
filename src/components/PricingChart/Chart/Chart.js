import React from 'react';
import styles from './Chart.module.scss'
import Button from 'components/UI/Button/Button';
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
                    <Button type="subscribe">Subscribe</Button>
                </div>
            </div>
        </div>
    );
};



export default Chart;
