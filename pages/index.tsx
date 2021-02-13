import { useNavbarState } from "../contexts/GlobalContext";

import Nav from "../components/nav/Nav";

const Home = () => {
  const { navState, setNavState } = useNavbarState();
  return (
    <main>
      <Nav />
      <h1>{navState.sidebarState.toString()}</h1>
      <button
        onClick={() =>
          setNavState({ ...navState, sidebarState: !navState.sidebarState })
        }
      >
        Change
      </button>
    </main>
  );
};
export default Home;
