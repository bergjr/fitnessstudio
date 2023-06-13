import React from 'react';
import styles from './Trainers.module.scss'
import Trainer from './Trainer/Trainer';
const Trainers = () => {
    return (
        <section id={styles.trainers}>
            <div className={styles['text-container']}>
                <h3>Gym Trainers</h3>
                <h2>Team of Experts Coaches</h2>
                <p>Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
            </div>
            <ul>
                <li><Trainer img="trainer1.png" name="Everton Correa" type="Boxe Trainer" /></li>
                <li><Trainer img="trainer2.png" name="Ian Marks" type="Aerobics Trainer" /></li>
                <li><Trainer img="trainer3.png" name="Júlia Lima" type="Nutritionist" /></li>
            </ul>
        </section>
    );
}

export default Trainers;
