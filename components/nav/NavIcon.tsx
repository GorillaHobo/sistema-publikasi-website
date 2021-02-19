import Link from "next/link";
import { FaReact } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledNavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  align-self: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & h2 {
    margin-right: ${(props) => props.theme.spacings.sm};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    position: initial;
    transform: translate(0, 0);
  }
`;

const NavIcon = () => {
  return (
    <StyledNavIcon>
      <Link href="/">
        <h2>Sistema Publikasi</h2>
      </Link>
      <FaReact size="2rem" />
    </StyledNavIcon>
  );
};

export default NavIcon;
