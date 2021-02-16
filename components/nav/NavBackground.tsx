import styled from "@emotion/styled";
import { useNavState } from "../../contexts/NavContext";
import { CSSTransition } from "react-transition-group";

const StyledNavBackground = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.7;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 50;

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
  const { navState, setNavState } = useNavState();

  return (
    <CSSTransition
      in={navState.sidebarState}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <StyledNavBackground
        onClick={() => setNavState({ sidebarState: !navState.sidebarState })}
      />
    </CSSTransition>
  );
};

export default NavBackground;
