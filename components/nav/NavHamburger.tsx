import styled from "@emotion/styled";

const StyledNavHamburger = styled.div`
  background-color: red;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const NavHamburger = () => {
  return (
    <StyledNavHamburger>
      <h1>Hello</h1>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
