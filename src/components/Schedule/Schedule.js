import React, { useEffect, useState } from 'react';
import styles from './Schedule.module.scss';
import Button from 'components/UI/Button/Button';
import ScheduleList from './ScheduleList';
import schedules from 'json/classes.json';

const Schedule = () => {
    const [classes, setClasses] = useState(schedules[0]);
    const [active, setActive] = useState("Monday");
    const filter = (day) => {
        const filteredClasses = schedules.filter(schedule => schedule.day === day);
        setClasses(filteredClasses[0]);
        setActive(day);
    }
    
    useEffect(()=> {
        window.scrollTo(0,0);
    }, []);

    return (
        <section id={styles.schedule}>
            <div className={styles.container}>
                <h2>Schedule</h2>
                <ul className={styles['days-list']}>
                    <li>
                        <Button active={(active === "Monday") ? "active" : ""} onClickHandler={filter} type="small">Monday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Tuesday") ? "active" : ""} onClickHandler={filter} type="small">Tuesday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Wednesday") ? "active" : ""} onClickHandler={filter} type="small">Wednesday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Thursday") ? "active" : ""} onClickHandler={filter} type="small">Thursday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Friday") ? "active" : ""} onClickHandler={filter} type="small">Friday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Saturday") ? "active" : ""} onClickHandler={filter} type="small">Saturday</Button>
                    </li>
                    <li>
                        <Button active={(active === "Sunday") ? "active" : ""} onClickHandler={filter} type="small">Sunday</Button>
                    </li>
                </ul>
                <ScheduleList classes={classes} />
            </div>
        </section>
    );
}

export default Schedule;
