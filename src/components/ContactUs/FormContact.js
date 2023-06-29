import React from 'react';
import styles from './FormContact.module.scss';
import Button from 'components/UI/Button/Button';

const FormContact = () => {
    return ( 
    <div className={styles.container}>
        <h2>Get <span>in touch</span> with us 📧 </h2>   
        <form onSubmit={(e) => e.preventDefault()}>
            <label for="name">Name:</label>
            <input name="name" type="text" placeholder='Please inform your name'/>
            <label for="email">Email:</label>
            <input name="email" type="email" placeholder='Please inform your email' />
            <label for="subject">Your Subject:</label>
            <select name="subject">
                <option value="">Join Fitness Club</option>
                <option value="">Information about classes</option>
                <option value="">Other</option>
            </select>
            <label for="comment" >Comment:</label>
            <textarea name="comment" placeholder='Content of your message'/>
            <Button type="button">SEND IT</Button>
        </form>    
    </div>     
    );
}

export default FormContact;
