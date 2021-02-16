import styled from "@emotion/styled";
import NavIcon from "../nav/NavIcon";

import { AiFillPhone, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};

  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & h4 {
    margin-left: 1rem;
    margin: 5px 0 5px 1rem;
  }

  &.main {
    margin: 0 5px 0 0;
    & h2 {
      margin-right: 8px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2020. All contents are created by Sistema Publikasi.</p>
    </StyledFooter>
  );
};

export default Footer;
