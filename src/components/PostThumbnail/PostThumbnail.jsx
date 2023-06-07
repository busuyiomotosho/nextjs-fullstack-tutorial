import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./thumbnail.module.css";

const PostThumbnail = (props) => {
  return (
    <div>
      <Link href={props.blogURL} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={props.image}
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.desc}>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostThumbnail;
