import React from "react";
import styles from "./Testimonials.module.scss";
import Testimonial from "./Testimonial/Testimonial";
import Partners from "./Partners/Partners";


const Testimonials = () => {
  return (
    <section id={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles["testimonials-container"]}>
        <ul className={styles["testimonials-container__inner"]}>
          <li>
            <Testimonial img="man-exercising.jpg" />
          </li>
        </ul> 
      </div>
      <Partners />
    </section>
  );
};

export default Testimonials;
