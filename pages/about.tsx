import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import SectionTitle from "../components/SectionTitle";

const Styledabout = styled.div``;

const about = () => {
  return (
    <Layout>
      <Nav />
      <Hero page="about" />
      <SectionTitle title="Meet the Team" margin="large" />
      <Team />
      <Footer />
    </Layout>
  );
};

export default about;
