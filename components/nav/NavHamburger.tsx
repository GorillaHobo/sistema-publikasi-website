import styled from "@emotion/styled";
import { useNavbarState } from "../../contexts/GlobalContext";

const StyledNavHamburger = styled.div`
  background-color: red;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const NavHamburger = () => {
  const { navState, setNavState } = useNavbarState();
  return (
    <StyledNavHamburger
      onClick={() =>
        setNavState({ ...navState, sidebarState: !navState.sidebarState })
      }
    >
      <h1>Hello</h1>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
