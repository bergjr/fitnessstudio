import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <>
            <button className={styles[props.type]}>{props.children}</button>
        </>
    );
}

export default Button;
