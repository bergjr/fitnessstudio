import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkShadow.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LinkShadow = (props) => {
    return (

    <Link className={`${styles.link} ${props.color ? styles[`link--${props.color}`] : ''}`} to={props.to}>
            {props.children} <AiOutlineArrowRight />
    </Link>
    
    );
}

export default LinkShadow;
