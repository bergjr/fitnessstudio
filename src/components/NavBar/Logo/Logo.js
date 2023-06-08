import React from 'react'
import { IoIosFitness } from 'react-icons/io'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <IoIosFitness />
            <div className={styles.text}>
                <h3>Fitness Studio</h3>
                <h4>Your gym center</h4>
            </div>
        </div>
    );
}

export default Logo;
