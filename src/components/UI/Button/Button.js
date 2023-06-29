import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <>
            {props.onClickHandler ? 
                <button onClick={() => props.onClickHandler(props.children)} className={`${styles.button} ${props.type ? styles["button--"+props.type] : ''} ${props.active ? styles['button--active'] : "" }`}>
                {props.children}
                </button> 
            : 
            <button className={`${styles.button} ${props.type ? styles["button--"+props.type] : ''} ${props.active ? styles['button--active'] : "" }`}>
                {props.children}
            </button> }
        </>
    );
}

export default Button;
