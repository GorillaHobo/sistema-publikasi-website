import styled from "@emotion/styled";
import { useNavbarState } from "../../contexts/GlobalContext";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const StyledNavHamburger = styled.div`
  padding: ${(props) => props.theme.spacings.xsm};

  display: none;

  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }
`;

const NavHamburger = (props) => {
  const { navState, setNavState } = useNavbarState();
  return (
    <StyledNavHamburger
      onClick={() =>
        setNavState({ ...navState, sidebarState: !navState.sidebarState })
      }
    >
      {navState.sidebarState ? (
        <IoCloseSharp size="1.8rem" color="#282828" />
      ) : (
        <IoMenuSharp size="1.8rem" color="#282828" />
      )}
    </StyledNavHamburger>
  );
};

export default NavHamburger;
