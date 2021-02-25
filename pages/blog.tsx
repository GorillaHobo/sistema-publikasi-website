import SectionTitle from "../components/SectionTitle";
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
      <SectionTitle title="Articles" margin="large" isBlog />
      <BlogCards posts={allPosts} />
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
