import { InferGetStaticPropsType } from "next";

import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import Testimony from "../components/testimony/Testimony";
import Contact from "../components/contact/Contact";
import BlogCards from "../components/blog/BlogCards";

import { getAllPosts } from "../lib/api";

const Home = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Journal />
      <Services />
      <Testimony />
      <BlogCards posts={allPosts} />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Home;

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
