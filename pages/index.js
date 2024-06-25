import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Code blog, NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="about"><li>About</li></Link>
          <Link href="blog"><li>Blog</li></Link>
          <Link href="contact"><li>Contact</li></Link>
        </ul>
      </nav>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.title}>
            <h1>Coder Blog</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.blog}>
            <h2 className={styles.blogItem}>Popular Blogs</h2>
            <div className={styles.blogItem}>
              <h3>How to lean NextJS</h3>
              <p>Js is the languae of the Web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to lean NextJS</h3>
              <p>Js is the language of the Web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to lean NextJS</h3>
              <p>Js is the languae of the Web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to lean NextJS</h3>
              <p>Js is the languae of the Web</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
