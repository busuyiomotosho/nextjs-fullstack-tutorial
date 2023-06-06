import React from "react";
import styles from "./page.module.css";
import Hero from "public/contact_us.svg";
import Image from "next/image";
import Button from "@/components/Button/Button";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Hero}
            alt="contact us hero"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="text"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            placeholder="Your Message"
            className={styles.textArea}
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
