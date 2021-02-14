import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";

const Home = () => {
  return (
    <main style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <Journal />
    </main>
  );
};
export default Home;
