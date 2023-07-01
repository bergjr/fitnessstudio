import React, { useState } from 'react';
import styles from './BMI.module.scss'
import Button from 'components/UI/Button/Button';
const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [status, setStatus] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        const bmic = weight/(height*height) *10000;
        bmic < 18.5 ? setStatus('Underweight') : bmic > 18.5 && bmic < 24.9 ? setStatus('Normal weight') : bmic > 24 && bmic < 29.9 ? setStatus('Overweight') : setStatus('Obesity')
        setBmi(weight/(height*height) *10000);
        setWeight('')
        setHeight('')
    }

    return (
        <section id={styles.bmi}>
            <div className={styles['container']}>
                <h2>Let's calculate your <span>BMI</span></h2>
                <p>Easily determine your body mass index with our accurate calculation tool</p>
                <form onSubmit={calculateBMI}>
                    <div>
                        <input required type='number' name="weight" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight / Kg"/>
                        <input required type='number' name="height" value={height} onChange={e => setHeight(e.target.value)}  placeholder="Height / Cm"/>
                    </div>
                    <div className={styles.result}>
                        <p>Your BMI is: <span>{Math.floor(bmi)}</span></p>
                        <p>Your status is: <span>{status}</span></p>
                    </div>
                    <Button type="button">Calculate</Button>
                </form>
            </div>
        </section>
    );
}

export default BMI;
