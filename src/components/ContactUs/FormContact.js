import React from 'react';
import styles from './FormContact.module.scss';
const FormContact = () => {
    return ( 
    <div className={styles.container}>   
        <form >
            <label for="name">Name:</label>
            <input name="name" type="text" />
            <label for="email">Email:</label>
            <input name="email" type="email" />
            <label for="subject">Your Subject:</label>
            <select name="subject">
                <option value="">Join Fitness Club</option>
                <option value="">Information about classes</option>
                <option value="">Other</option>
            </select>
            <label for="comment">Comment:</label>
            <textarea name="comment" />
        </form>    
    </div>     
    );
}

export default FormContact;
