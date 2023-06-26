"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Dashboard() {
  const session = useSession();
  const router = useRouter();

  // console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res, json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: session.data.user.name,
          title,
          desc,
          img,
          content,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((posts) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width="200" height="100" />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span className={styles.delete}>X</span>
                </div>
              ))}
        </div>
        <form className={styles.new} onClick={handleSubmit}>
          <h2>Add New Post</h2>
          <input
            type="text"
            placeholder="New Post Title..."
            className={styles.input}
          />
          <input
            type="text"
            placeholder="New Post Description..."
            className={styles.input}
          />
          <input
            type="text"
            placeholder="New Post Image..."
            className={styles.input}
          />
          <textarea
            placeholder="New Post Content..."
            className={styles.textarea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Publish</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
