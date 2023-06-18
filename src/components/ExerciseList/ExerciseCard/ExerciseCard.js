import React from 'react';
import styles from './ExerciseCard.module.scss';

const ExerciseCard = ({children, title, text}) => {
    return (
        <div className={styles.exercise}> 
                {children}
                <h2>{title}</h2>
                <p>{text}</p>
        </div>
    );
}

export default ExerciseCard;
