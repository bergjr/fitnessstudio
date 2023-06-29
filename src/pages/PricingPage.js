import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import PricingChart from 'components/PricingChart/PricingChart';
import React, { useEffect } from 'react';

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <MiniBanner img="minibanner1.jpg" />
            <PricingChart />
        </>
    );
}

export default PricingPage;
