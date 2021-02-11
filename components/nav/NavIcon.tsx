import { FaReact } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledNavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    margin-right: ${(props) => props.theme.spacings.small};
  }
`;

const NavIcon = () => {
  return (
    <StyledNavIcon>
      <h2>Sistema Publikasi</h2>
      <FaReact size="2rem" />
    </StyledNavIcon>
  );
};

export default NavIcon;
