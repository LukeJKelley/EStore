import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CarouselImages.module.scss";

const CarouselImages = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.Carousel}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className={styles.Carousel__Img}
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* first slide */}
            <h3>Check out our Jewelry</h3>
            <p>Fashionable Jewelry at the lowest prices</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.Carousel__Img}
            src="https://images.unsplash.com/photo-1602542165989-999c53234fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Back to School Items</h3>
            <p>Best prices on all your back to school needs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.Carousel__Img}
            src="https://images.unsplash.com/photo-1610582144787-eda2e6f293b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Stock up for the cooler months</h3>
            <p>Great quality hoodies to keep you warm when you need it</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
