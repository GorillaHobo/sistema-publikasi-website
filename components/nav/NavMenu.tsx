import NavMenuItem from "./NavMenuItem";
import styled from "@emotion/styled";
import { INavMenuItem } from "./Nav";

const StyledNavItem = styled.ul`
  display: flex;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

const NavItem = ({ navMenuItems }: { navMenuItems: INavMenuItem[] }) => {
  return (
    <StyledNavItem className="flex items-center justify-center">
      {navMenuItems.map((item, index) => (
        <NavMenuItem item={item} key={index} />
      ))}
    </StyledNavItem>
  );
};

export default NavItem;
