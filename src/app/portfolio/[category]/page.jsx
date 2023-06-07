import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

function Category({ params }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.catTitle}>{params.category}</h2>
      <div className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Content Title</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
            turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu
            nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam,
            scelerisque in elit ac, pellentesque elementum eros. Nullam vitae
            nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac
            consectetur purus. Aenean aliquam nisi risus, et fermentum ligula
            suscipit quis.
          </p>
          <Button text="Learn more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/12993530/pexels-photo-12993530.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Content Title</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
            turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu
            nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam,
            scelerisque in elit ac, pellentesque elementum eros. Nullam vitae
            nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac
            consectetur purus. Aenean aliquam nisi risus, et fermentum ligula
            suscipit quis.
          </p>
          <Button text="Learn more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16159222/pexels-photo-16159222/free-photo-of-dirty-pattern-texture-wall.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
