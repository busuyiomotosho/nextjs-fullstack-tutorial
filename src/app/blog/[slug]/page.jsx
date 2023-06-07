import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <Image
          src="https://images.pexels.com/photos/17123489/pexels-photo-17123489/free-photo-of-animal-pet-cute-fur.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.blogTitle}>Blog Title</h1>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17114759/pexels-photo-17114759/free-photo-of-sea-city-water-port.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <p>Author Name</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
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
            <br />
            <br />
            Duis convallis eleifend tellus, eu pharetra lorem finibus vel. Etiam
            quis nulla eleifend, facilisis augue vel, porttitor justo.
            Pellentesque vulputate vulputate justo sed facilisis. Integer id
            ligula non ligula laoreet vulputate ut ac lacus. Mauris tempor
            vestibulum porta. In et diam sit amet lectus finibus accumsan.
            <br />
            <br />
            Duis fringilla semper magna eu suscipit. Vivamus vitae posuere
            mauris. Sed sagittis sapien eget felis bibendum pulvinar. Nulla sit
            amet ex nec urna maximus hendrerit. Etiam et quam dictum, tempus dui
            non, scelerisque enim. Ut et venenatis lorem, sed rutrum ligula.
            Nunc odio est, imperdiet aliquam sodales id, faucibus at eros.
            Praesent vitae sagittis quam, vel feugiat augue.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17114759/pexels-photo-17114759/free-photo-of-sea-city-water-port.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
          turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu
          nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam,
          scelerisque in elit ac, pellentesque elementum eros. Nullam vitae nunc
          sollicitudin, ultricies ligula non, dictum tortor. Cras ac consectetur
          purus. Aenean aliquam nisi risus, et fermentum ligula suscipit quis.
          <br />
          <br />
          Done vestibulum rhoncus feugiat. Sed euismod imperdiet elit blandit
          vestibulum. Nunc efficitur nisl facilisis, pretium orci sit amet,
          rhoncus eros. Pellentesque non consectetur quam, sit amet facilisis
          arcu. Suspendisse potenti.
          <br />
          <br />
          Duis convallis eleifend tellus, eu pharetra lorem finibus vel. Etiam
          quis nulla eleifend, facilisis augue vel, porttitor justo.
          Pellentesque vulputate vulputate justo sed facilisis. Integer id
          ligula non ligula laoreet vulputate ut ac lacus. Mauris tempor
          vestibulum porta. In et diam sit amet lectus finibus accumsan.
          <br />
          <br />
          Duis fringilla semper magna eu suscipit. Vivamus vitae posuere mauris.
          Sed sagittis sapien eget felis bibendum pulvinar. Nulla sit amet ex
          nec urna maximus hendrerit. Etiam et quam dictum, tempus dui non,
          scelerisque enim. Ut et venenatis lorem, sed rutrum ligula. Nunc odio
          est, imperdiet aliquam sodales id, faucibus at eros. Praesent vitae
          sagittis quam, vel feugiat augue.
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
