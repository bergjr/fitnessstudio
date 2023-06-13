import React from 'react';
import styles from './Partners.module.scss';
import muscle from "assets/muscle.png";
import fitnessclub from "assets/fitnessclub.png";
import gym from "assets/gymclub.png";
import athletic from 'assets/athletic.png';

const Partners = () => {
    return (
        <ul className={styles.partners}>
        <li>
            <img src={muscle} alt="" />
        </li>
        <li>
            <img src={gym} alt="" />
        </li>
        <li>
            <img src={fitnessclub} alt="" />
        </li>
        <li>
            <img src={athletic} alt="" />
        </li>
      </ul>
    );
}

export default Partners;
