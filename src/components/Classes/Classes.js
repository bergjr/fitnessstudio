import React from 'react';
import styles from './Classes.module.scss'
import Classe from './Classe/Classe';

const Classes = (props) => {
    return (
        <section id={styles.classes}>
            <div className={styles['inner-box']}>
                <h3 className={styles.title}>Our Featured Class</h3>
                {!props.version && <h2 className={styles.text}>We are offering the best exercise classes in town</h2>}
            </div>
            <ul className={props.version === 'full' ? 'full' : ''}>
                <Classe version={props.version} icon="cyclingi.png" trainer="Conor O'Brian" img="bicycle.jpg" exercise="Bicycle" day="Wednesdays" time="9am"/>
                <Classe version={props.version} icon="boxingi.png" trainer="Carlos Refúl" img="boxing.jpg" exercise="Boxing" day="Thursdays" time="10am"/>
                <Classe version={props.version} icon="yogai.png" trainer="Lucas Taif" img="yoga.jpg" exercise="yoga" day="Friday"  time="8am" />
                <Classe version={props.version} icon="swimmingi.png" trainer="Alex Storm" img="swimming.jpg" exercise="Swimming" day="Monday" time="7pm" />
                <Classe version={props.version} icon="extendedi.png" trainer="Alan Tea" img="aerobics.jpg" exercise="Aerobics" day="Friday" time="1pm" />
                <Classe version={props.version} icon="weightlifteri.png" trainer="Tina Laviv" img="weight.jpg" exercise="Powerlifting" day="All Weak" time="11am" />
            </ul>
        </section>
    );
}

export default Classes;
