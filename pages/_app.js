import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="about"><li>About</li></Link>
          <Link href="blog"><li>Blog</li></Link>
          <Link href="contact"><li>Contact</li></Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
