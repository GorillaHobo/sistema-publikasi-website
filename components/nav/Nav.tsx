import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import NavMenu from "./NavMenu";
import NavSignUp from "./NavSignUp";
import NavIcon from "./NavIcon";
import NavHamburger from "./NavHamburger";
import NavBackground from "./NavBackground";

export interface INavMenuItem {
  name: string;
  href: string;
}

const navMenuItems: INavMenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};

  padding: 0 ${(props) => props.theme.spacings.medium};
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
`;

const Nav = () => {
  const [navPosition, setNavPosition] = useState<boolean>(false);

  const onScroll = (): void => {
    if (window.scrollY > 100) {
      setNavPosition(true);
    } else if (window.scrollY <= 80) {
      setNavPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <StyledNav>
        <NavMenu navMenuItems={navMenuItems} />
        <NavHamburger />
        <NavIcon />
        <NavSignUp />
      </StyledNav>
      <NavBackground />
    </>
  );
};

export default Nav;
