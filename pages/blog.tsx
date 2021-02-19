import { InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import BlogCards from "../components/blog/BlogCards";
import Footer from "../components/footer/Footer";

import { getAllPosts } from "../lib/api";

const Blog = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Nav />
      <BlogCards posts={allPosts} title="Articles" isBlog />
      <Footer />
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return {
    props: { allPosts },
  };
};
