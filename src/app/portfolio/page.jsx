import React from "react";
import styles from "./page.module.css";
import Works from "@/components/Works/Works";

function Portfolio() {
  return (
    <div className={styles.container}>
      <h2 className={styles.selectTitle}>Choose A Gallery</h2>
      <div className={styles.works}>
        <Works
          link="/portfolio/illustrations"
          image="https://images.pexels.com/photos/8015780/pexels-photo-8015780.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Illustrations"
        />
        <Works
          link="/portfolio/websites"
          image="https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Websites"
        />
        <Works
          link="/portfolio/applications"
          image="https://images.pexels.com/photos/4526432/pexels-photo-4526432.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Applications"
        />
      </div>
    </div>
  );
}

export default Portfolio;
