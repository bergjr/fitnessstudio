import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import Classes from 'components/Classes/Classes';
import React, { useEffect } from 'react';

const ClassesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <MiniBanner img="minibanner1.jpg" />
            <Classes version="full"/>
        </>
    );
}

export default ClassesPage;
