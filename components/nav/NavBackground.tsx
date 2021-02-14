import styled from "@emotion/styled";
import { useNavbarState } from "../../contexts/GlobalContext";
import { CSSTransition } from "react-transition-group";

const StyledNavBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.7;

  position: fixed;
  z-index: 99;

  display: none;
  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 0.7;
    transition: opacity ease-in-out ${(props) => props.theme.speed.slow};
  }
  &.fade-exit {
    opacity: 0.7;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity ease-in-out ${(props) => props.theme.speed.slow};
  }
`;

const NavBackground = () => {
  const { navState, setNavState } = useNavbarState();

  return (
    <CSSTransition
      in={navState.sidebarState}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <StyledNavBackground
        onClick={() => setNavState({ ...navState, sidebarState: false })}
      />
    </CSSTransition>
  );
};

export default NavBackground;
