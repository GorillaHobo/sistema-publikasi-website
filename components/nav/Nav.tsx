import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import NavMenu from "./NavMenu";
import NavSignUp from "./NavSignUp";
import NavIcon from "./NavIcon";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.black};
`;

const Nav = () => {
  const [navPosition, setNavPosition] = useState(false);

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
    <StyledNav>
      <NavMenu navMenuItems={navMenuItems} />
      <NavIcon />
      <NavSignUp />
    </StyledNav>
  );
};

export default Nav;
