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

  ${(props) => props.theme.transition.fade};
`;

const NavBackground = () => {
  const { navState, setNavState } = useNavState();

  return (
    <CSSTransition
      in={navState.sidebarState}
      timeout={300}
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
