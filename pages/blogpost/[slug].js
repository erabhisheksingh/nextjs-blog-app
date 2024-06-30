import { useRouter } from 'next/router';
import styles from "@/styles/Blogpost.module.css";

const BlogPost = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  console.log({ slug })
  return (
    <div className={styles.description}>
      <h1 className={styles.blogTitle}>Title of the Blog - {slug}</h1>
      <hr />
      <div className={styles.blogDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Quisquam debitis amet maiores. Commodi reiciendis nemo sunt mollitia amet? Quisquam, minima doloremque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi odio laudantium quidem amet quam, maiores libero ut, eligendi ab neque cupiditate animi consequuntur qui aperiam saepe nam officiis illo sequi asperiores, autem nihil id. Corrupti, in! Ab molestiae doloremque veniam mollitia ducimus, dignissimos autem!
      </div>
    </div>
  );
};

export default BlogPost;
