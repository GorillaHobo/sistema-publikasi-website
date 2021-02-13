import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import NavMenu from "./NavMenu";
import NavSignUp from "./NavSignUp";
import NavIcon from "./NavIcon";
import NavHamburger from "./NavHamburger";

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

const StyledNav = styled.nav<{ navPosition: boolean }>`
  height: ${(props) =>
    props.navPosition
      ? props.theme.spacings.xLarge
      : props.theme.spacings.xxLarge};

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  box-shadow: ${(props) => props.navPosition && props.theme.shadows.large};

  padding: 0 ${(props) => props.theme.spacings.medium};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;

  transition: all ease 500ms;
`;

const Nav = () => {
  const [navPosition, setNavPosition] = useState<boolean>(false);

  const onScroll = (): void => {
    if (window.scrollY > 20) {
      setNavPosition(true);
    } else {
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
    <StyledNav navPosition={navPosition}>
      <NavMenu navMenuItems={navMenuItems} />
      <NavHamburger />
      <NavIcon />
      <NavSignUp />
    </StyledNav>
  );
};

export default Nav;
