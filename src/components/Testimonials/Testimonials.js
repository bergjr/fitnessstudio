import React from "react";
import styles from "./Testimonials.module.scss";
import Testimonial from "./Testimonial/Testimonial";
import Partners from "./Partners/Partners";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  // const img = require("assets/bicycle.jpg");
  const options = { perPage: 1, 
                    rewind: true,
                    autoHeight: true,
                    gap: "1rem",
                    type: 'loop',
                    classes:{ 
                              arrows: `splide__arrows ${styles.arrows}`,
                              arrow : 'splide__arrow',
                              prev  : `splide__arrow--prev ${styles.prev}`,
                              next  : `splide__arrow--next ${styles.next}`,
                            }
                  }


  return (
    <section id={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles["testimonials-container"]}>
        <Splide options={options} hasTrack={false} aria-label="My Favorite Images">
          <SplideTrack>
            <SplideSlide>
              <Testimonial img="james.png"/>
            </SplideSlide>
            <SplideSlide>
              <Testimonial img="james.png"/>
            </SplideSlide>
            <SplideSlide>
              <Testimonial img="james.png"/>
            </SplideSlide>
            <SplideSlide>
              <Testimonial img="james.png"/>
            </SplideSlide>
          </SplideTrack>
          <div className={`splide__arrows ${styles.arrows}`}>
            <button className={`splide__arrow splide__arrow--prev ${styles.prev}`}><AiOutlineArrowLeft /></button>
            <button className={`splide__arrow splide__arrow--next ${styles.next}`}><AiOutlineArrowRight /></button>
          </div>
        </Splide>
      </div>
      <Partners />
    </section>
  );
};

export default Testimonials;
