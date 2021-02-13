import styled from "@emotion/styled";
import { useNavbarState } from "../../contexts/GlobalContext";

const StyledNavBackground = styled.div<{ navState: { sidebarState: boolean } }>`
  height: 100vh;
  width: 100vw;
  background-color: red;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  opacity: 0;
  transition: all ease 500ms;

  display: ${(props) => (props.navState.sidebarState ? "block" : "none")};
  @media (max-width: 1000px) {
    opacity: ${(props) => props.navState.sidebarState && "1"};
  }
`;

const NavBackground = () => {
  const { navState, setNavState } = useNavbarState();
  return (
    <StyledNavBackground
      navState={navState}
      onClick={() => setNavState({ ...navState, sidebarState: false })}
    />
  );
};

export default NavBackground;
