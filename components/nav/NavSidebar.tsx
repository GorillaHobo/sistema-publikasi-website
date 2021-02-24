import styled from "@emotion/styled";
import NavMenuItem from "./NavMenuItem";
import { INavMenuItem } from "./Nav";
import { useNavState } from "../../contexts/NavContext";
import { CSSTransition } from "react-transition-group";

const StyledNavSidebar = styled.ul`
  background-color: white;
  margin: 0;
  padding: 10rem ${(props) => props.theme.spacings.l};
  width: 300px;

  list-style: none;
  display: none;

  position: fixed;
  left: 0;
  bottom: 0;
  top: 59px;
  z-index: 1000;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
  }

  ${(props) => props.theme.transition.slide};
`;

const NavSidebar = ({ navMenuItems }: { navMenuItems: INavMenuItem[] }) => {
  const { navState } = useNavState();
  return (
    <CSSTransition
      in={navState.sidebarState}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      <StyledNavSidebar>
        {navMenuItems.map((item, index) => (
          <NavMenuItem item={item} key={index} />
        ))}
      </StyledNavSidebar>
    </CSSTransition>
  );
};

export default NavSidebar;
