import CardBasic from 'components/UI/CardBasic/CardBasic';
import React from 'react';
import styles from './ExerciseList.module.scss';
import { BsClockHistory } from 'react-icons/bs';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import ExerciseCard from './ExerciseCard/ExerciseCard';


const ExerciseList = () => {
    return (
        <section id={styles.exercises}>
            <div className={styles.container}>
            <CardBasic>
                <ExerciseCard title="Progression" text="Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.">
                    <BsClockHistory />
                </ExerciseCard>
            </CardBasic>
            <CardBasic>
                <ExerciseCard title="Workout" text="With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.">
                    <GiWeightLiftingUp />
                </ExerciseCard>
            </CardBasic>
            <CardBasic>
                <ExerciseCard title="Nutrition" text="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.">
                    <BiFoodMenu />
                </ExerciseCard>
            </CardBasic>
            </div>
        </section>
    );
}

export default ExerciseList;
