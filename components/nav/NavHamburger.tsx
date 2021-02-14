import styled from "@emotion/styled";
import { useNavState } from "../../contexts/NavContext";

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

const NavHamburger = () => {
  const { navState, setNavState } = useNavState();
  return (
    <StyledNavHamburger
      onClick={() => setNavState({ sidebarState: !navState.sidebarState })}
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
