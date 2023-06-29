import React from 'react';
import styles from './ScheduleList.module.scss'; 
import Button from 'components/UI/Button/Button';
import { Link } from 'react-router-dom';

const ScheduleList = (props) => {
    return (
        <ul className={styles.list}>
            {props.classes.data.map((classe) => {
                return (
                    <li key={Math.random()}>
                        <div>
                            <p className={styles.category}>Class Name</p>
                            <p className={styles.title}>{classe.class}</p>
                        </div>
                        <div>
                            <p className={styles.category}>Time</p>
                            <p className={styles.title}>{classe.time}</p>
                        </div>
                        <div>
                            <p className={styles.category}>Trainer</p>
                            <p className={styles.title}>{classe.trainer}</p>
                        </div>
                        <Link className={styles.join} to="/contactus">Join Now</Link>
                    </li>
            )}  
        )
        }
            
        </ul>
    );
}

export default ScheduleList;
