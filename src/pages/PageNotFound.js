import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import React from 'react';
import styles from "./PageNotFound.module.scss";
const PageNotFound = () => {
    return (
        <>
        <MiniBanner />
        <section id={styles.notfound}> 
            <h1> Page not found.</h1>
        </section>
        </>
    );
}

export default PageNotFound;
