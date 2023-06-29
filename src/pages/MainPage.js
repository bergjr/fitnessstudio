import Banner from 'components/Banner/Banner';
import Classes from 'components/Classes/Classes';
import ExerciseList from 'components/ExerciseList/ExerciseList';
import React, { useEffect } from 'react';
import styles from './MainPage.module.scss';
import Trainers from 'components/Trainers/Trainers';
import Testimonials from 'components/Testimonials/Testimonials';
import BMI from 'components/BMI/BMI';
import PricingChart from 'components/PricingChart/PricingChart';
import AboutUs from 'components/AboutUs/AboutUs';

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Banner />
            <section className={styles['first-section']}>
                <ExerciseList />
                <AboutUs />
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
