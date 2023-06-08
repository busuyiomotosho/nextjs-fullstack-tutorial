import React from "react";
import styles from "./page.module.css";
import PostThumbnail from "@/components/PostThumbnail/PostThumbnail";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Blog</div>
      {data.map((item) => (
        <PostThumbnail
          key={item._id}
          blogURL={`/blog/${item._id}`}
          image={item.image}
          title={item.title}
          description={item.desc}
        />
      ))}
    </div>
  );
};

export default Blog;
