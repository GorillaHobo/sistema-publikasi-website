import styled from "@emotion/styled";

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};

  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2021. All contents are created by Sistema Publikasi.</p>
    </StyledFooter>
  );
};

export default Footer;
