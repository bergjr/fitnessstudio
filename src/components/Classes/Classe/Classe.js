import React from 'react';
import styles from './Classe.module.scss';
import { ImProfile } from 'react-icons/im'
import { AiOutlineClockCircle } from 'react-icons/ai';
import LinkShadow from 'components/UI/LinkShadow/LinkShadow';
import { useMediaQuery } from 'react-responsive';

const Classe = (props) => {
    const img = require(`assets/${props.img}`);
    const icon = require(`assets/icons/${props.icon}`);
    const version = props.version;
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <li className={`${styles['classe']} ${version ? styles.full : ''}`}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}}></div>
           {!version && <div className={styles.icon}>
                <img src={icon} alt={props.exercise} />
            </div>}
            <div className={`${styles['text']} `}>
                <h3>{props.exercise}</h3>
                {(version && isDesktop) ? <h4><span><ImProfile />{props.trainer}</span> <span><AiOutlineClockCircle /> {props.day} - {props.time}</span></h4>
                : <h4>{props.day} - {props.time}</h4>}
                {version && <LinkShadow to="/contactus">Join Now </LinkShadow>}
            </div>
        </li>
    )
}

export default Classe;
