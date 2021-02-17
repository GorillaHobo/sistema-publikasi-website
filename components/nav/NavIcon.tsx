import Link from "next/link";
import { FaReact } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledNavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  align-self: center;

  & h2 {
    margin-right: ${(props) => props.theme.spacings.sm};
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
