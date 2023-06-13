import React from 'react';
import styles from './Classes.module.scss'
import Classe from './Classe/Classe';

const Classes = () => {
    return (
        <section id={styles.classes}>
            <h3 className={styles.title}>Our Featured Class</h3>
            <h2 className={styles.text}>We are offering the best exercise classes in town</h2>
            <ul>
                <li>
                    <Classe img="bicycle.jpg" exercise="Bicycle" time="Wednesdays 10:00am to 13:00pm"/>
                </li>
                <li>
                    <Classe img="boxing.jpg" exercise="Boxing" time="Thursdays 7:00pm to 10:00pm"/>
                </li>
                <li>
                    <Classe img="power.jpg" exercise="Power" time="Friday 11:00am to 13:00pm"/>
                </li>
                <li>
                    <Classe img="weight.jpg" exercise="WeighLifting" time="Monday 11:00am to 13:00pm"/>
                </li>
            </ul>
        </section>
    );
}

export default Classes;
