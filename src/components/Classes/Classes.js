import React from 'react';
import styles from './Classes.module.scss'
import Classe from './Classe/Classe';

const Classes = () => {
    return (
        <section id={styles.classes}>
            <div className={styles['inner-box']}>
                <h3 className={styles.title}>Our Featured Class</h3>
                <h2 className={styles.text}>We are offering the best exercise classes in town</h2>
            </div>
            <ul>
                <Classe img="bicycle.jpg" exercise="Bicycle" time="Wednesdays 10am to 5pm"/>
                <Classe img="boxing.jpg" exercise="Boxing" time="Thursdays 7pm to 10pm"/>
                <Classe img="power.jpg" exercise="Power" time="Friday 11am to 2pm"/>
                <Classe img="weight.jpg" exercise="WeighLifting" time="Monday 11am to 8pm"/>
                <Classe img="boxing.jpg" exercise="Boxing" time="Thursdays 7pm to 10pm"/>
                <Classe img="power.jpg" exercise="Power" time="Friday 11am to 2pm"/>
            </ul>
        </section>
    );
}

export default Classes;
