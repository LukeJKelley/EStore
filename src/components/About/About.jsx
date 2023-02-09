import React from "react";
import styles from "./About.module.scss";

const Header = () => {
  return (
    <div className={styles.About}>
      <h1>About Us</h1>
      <p className={styles.About__Para}>
        We grew up together as friends with the same goal and developed into a
        dedicated team looking to give you the best products at the lowest
        price. Our products are the top quality, from only the best suppliers,
        looking to give you an amazing experience when shopping with us. If
        you're not happy we offer 100% money back guarantee! Come down today,
        and grab a bargain.
      </p>
      <img
        src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="About us image"
      />
    </div>
  );
};

export default Header;
