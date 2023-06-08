import React from 'react';
import styles from './CardBasic.module.scss';

const CardBasic = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
}

export default CardBasic;
