import Image from "next/image";
import React from "react";
import styles from "./works.module.css";
import Link from "next/link";

const Works = (props) => {
  return (
    <Link href={props.link} className={styles.imgContainer}>
      <Image src={props.image} alt="" fill={true} className={styles.img} />
      <span className={styles.title}>{props.title}</span>
    </Link>
  );
};

export default Works;
