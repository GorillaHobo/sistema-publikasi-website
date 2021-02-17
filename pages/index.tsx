import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import Testimony from "../components/testimony/Testimony";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Journal />
      <Services />
      <Testimony />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Home;
