import styled from "@emotion/styled";
import { useNavbarState } from "../../contexts/GlobalContext";

import { GiHamburgerMenu } from "react-icons/gi";

const StyledNavHamburger = styled.div`
  padding: ${(props) => props.theme.spacings.xSmall};

  display: none;

  @media ${(props) => props.theme.breakpoints.tablet} {
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
      <GiHamburgerMenu size="2rem" />
    </StyledNavHamburger>
  );
};

export default NavHamburger;
