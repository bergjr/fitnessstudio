import Banner from 'components/Banner/Banner';
import Classes from 'components/Classes/Classes';
import ExerciseList from 'components/ExerciseList/ExerciseList';
import React from 'react';
import styles from './MainPage.module.scss';
import Trainers from 'components/Trainers/Trainers';

const MainPage = () => {
    return (
        <>
            <Banner />
            <section className={styles['first-section']}>
                <ExerciseList />
            </section>
            <Classes />
            <Trainers />
        </>
    );
}

export default MainPage;
