import Banner from 'components/Banner/Banner';
import Classes from 'components/Classes/Classes';
import ExerciseList from 'components/ExerciseList/ExerciseList';
import React from 'react';
import styles from './MainPage.module.scss';
import Trainers from 'components/Trainers/Trainers';
import Testimonials from 'components/Testimonials/Testimonials';
import BMI from 'components/BMI/BMI';
import PricingChart from 'components/PricingChart/PricingChart';

const MainPage = () => {
    return (
        <>
            <Banner />
            <section className={styles['first-section']}>
                <ExerciseList />
            </section>
            <Classes />
            <Trainers />
            <Testimonials /> 
            <BMI />
            <PricingChart />
        </>
    );
}

export default MainPage;
