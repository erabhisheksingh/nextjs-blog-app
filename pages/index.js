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
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.title}>Code Haven</h1>
          <p className={styles.titledesc}>Welcome to Coder Blog, your premier destination for insightful and comprehensive blogs on the latest in the world of coding.
            Our platform is dedicated to delivering up-to-date information on cutting-edge technologies, current trends, and diverse tech
            stacks that are shaping the future of software development. Whether you are a seasoned developer or just starting your coding
            journey, Coder Blog offers valuable content written by industry experts to help you stay ahead in the ever-evolving tech landscape.
            Dive into our meticulously curated articles to enhance your knowledge, improve your skills, and stay informed about the latest
            advancements in the tech world.<br />
            At Coder Blog, we believe in the power of knowledge sharing and continuous learning. Our articles cover a wide
            range of topics including web development, mobile app development, data science, artificial intelligence, machine learning, DevOps, and more.
            We also provide in-depth tutorials, step-by-step guides, and best practices to help you master new tools and frameworks.</p>
        </div>
        <div className={styles.description}>
          <div>
            <h2 className={styles.blogTitle}>Popular Blogs</h2>
            <div className={styles.blogs}>
              <div className={styles.blogItem}>
                <h3>How to learn NextJS</h3>
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
      </main>
    </>
  );
}
