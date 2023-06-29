import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import React, { useEffect } from 'react';
import styles from "./PageNotFound.module.scss";
const PageNotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
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
