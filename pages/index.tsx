import { InferGetStaticPropsType } from "next";
import { JournalProvider } from "../contexts/JournalContext";

import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Services from "../components/services/Services";
import Testimony from "../components/testimony/Testimony";
import Contact from "../components/contact/Contact";
import BlogCards from "../components/blog/BlogCards";
import Partners from "../components/Partners";
import Footer from "../components/footer/Footer";

import { getLatestPosts } from "../lib/api";

const Home = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Nav />
      <Hero page="index" />
      <Journal />
      <Services />
      <Testimony />
      <Partners />
      <Contact />
      <BlogCards posts={allPosts} />
      <Footer />
    </Layout>
  );
};
export default Home;

export const getStaticProps = async () => {
  const fields: string[] = [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ];
  const number: number = 2;
  const allPosts = getLatestPosts(fields, number);
  return {
    props: { allPosts },
  };
};
