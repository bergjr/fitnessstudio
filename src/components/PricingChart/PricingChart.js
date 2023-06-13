import React from 'react';
import styles from './PricingChart.module.scss'
import Chart from './Chart/Chart';
const PricingChart = () => {
    return (
        <section id={styles.pricing}>
            <h3 className={styles.title}>Pricing Chart</h3>
            <h2>Exclusive Pricing Plans</h2>
            <p>Gymat an unknown printer took a galley of type and scrambled
make a type specimen book.</p>
            <ul className={styles.container}>
                <li>
                    <Chart title="Beginner" price="39.90" img="boxing.jpg" />
                </li>
                <li>
                    <Chart title="Intermediate" price="99.90" img="womansback.jpg" />
                </li>
                <li>
                    <Chart title="Monster" price="149.90" img="fitness.jpg" />
                </li>
            </ul>
        </section>    
    );
}

export default PricingChart;
