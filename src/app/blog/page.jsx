import React from "react";
import styles from "./page.module.css";
import PostThumbnail from "@/components/PostThumbnail/PostThumbnail";

function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Blog</div>
      <PostThumbnail
        blogURL="/blog/testId"
        image="https://images.pexels.com/photos/17123466/pexels-photo-17123466/free-photo-of-city-traffic-fashion-people.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        title="Test Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam, scelerisque in elit ac, pellentesque elementum eros. Nullam vitae nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac consectetur purus. Aenean aliquam nisi risus, et fermentum ligula suscipit quis."
      />
      <PostThumbnail
        blogURL="/blog/testId"
        image="https://images.pexels.com/photos/17126466/pexels-photo-17126466/free-photo-of-snorkeling-in-egypt-dive-into-the-wonders-of-the-red-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        title="Test Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam, scelerisque in elit ac, pellentesque elementum eros. Nullam vitae nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac consectetur purus. Aenean aliquam nisi risus, et fermentum ligula suscipit quis."
      />
      <PostThumbnail
        blogURL="/blog/testId"
        image="https://images.pexels.com/photos/16846950/pexels-photo-16846950/free-photo-of-sea-beach-water-ocean.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        title="Test Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl turpis, dignissim tempus ligula vel, rutrum laoreet erat. Nunc eu nulla quis risus imperdiet dictum id nec metus. Fusce turpis quam, scelerisque in elit ac, pellentesque elementum eros. Nullam vitae nunc sollicitudin, ultricies ligula non, dictum tortor. Cras ac consectetur purus. Aenean aliquam nisi risus, et fermentum ligula suscipit quis."
      />
    </div>
  );
}

export default Blog;
