import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  // console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <Image src={data.image} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.blogTitle}>{data.title}</h1>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17114759/pexels-photo-17114759/free-photo-of-sea-city-water-port.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <p>{data.username}</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <p className={styles.desc}>{data.desc}</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.image} alt="" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <p className={styles.desc}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
