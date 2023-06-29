import MiniBanner from 'components/Banner/MiniBanner/MiniBanner';
import ContactUs from 'components/ContactUs/ContactUs';
import React, { useEffect } from 'react';

const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <MiniBanner />
            <ContactUs />
        </>
    );
}

export default ContactUsPage;
