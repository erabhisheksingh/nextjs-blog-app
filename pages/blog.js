import React from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.description}>
      <div>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}><h3>How to learn NextJS</h3></Link>
            <p>Js is the languae of the Web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Golang</h3>
            <p>Js is the language of the Web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Python</h3>
            <p>Js is the languae of the Web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to lean Java</h3>
            <p>Js is the languae of the Web</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Blog;