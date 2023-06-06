import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/15949284/pexels-photo-15949284/free-photo-of-interior-of-a-glass-construction.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Product Innovators</h1>
          <p>Handcrafting Award-Winning Futuristic Products</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
            turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu
            nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam,
            scelerisque in elit ac, pellentesque elementum eros. Nullam vitae
            nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac
            consectetur purus. Aenean aliquam nisi risus, et fermentum ligula
            suscipit quis.
            <br />
            <br />
            Done vestibulum rhoncus feugiat. Sed euismod imperdiet elit blandit
            vestibulum. Nunc efficitur nisl facilisis, pretium orci sit amet,
            rhoncus eros. Pellentesque non consectetur quam, sit amet facilisis
            arcu. Suspendisse potenti.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What Do We Do?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
            turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu
            nulla quis risus imperdiet dictum id nec metus.
            <br />
            <br />- Nunc efficitur nisl <br />- Nunc efficitur nisl
            <br />- Nunc efficitur nisl
          </p>
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
