import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Styledcontact = styled.div``;

const contact = () => {
  return (
    <Layout>
      <Nav />
      <Hero page="contact" />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default contact;
