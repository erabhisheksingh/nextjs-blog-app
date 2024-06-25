import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  console.log({slug})
  return (
    <div>
      <h1>Blog - {slug}</h1>
    </div>
  );
};

export default BlogPost;
