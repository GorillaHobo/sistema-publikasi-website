import NavMenuItem from "./NavMenuItem";
import styled from "@emotion/styled";

const StyledNavSignUp = styled.ul`
  display: flex;
  list-style: none;
`;

const NavSignUp = () => {
  return (
    <StyledNavSignUp>
      <NavMenuItem item={{ href: "/signin", name: "Sign In" }} />
      <NavMenuItem item={{ href: "/signup", name: "Sign Up" }} />
    </StyledNavSignUp>
  );
};

export default NavSignUp;
