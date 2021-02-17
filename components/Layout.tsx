import styled from "@emotion/styled";

const StyledLayout = styled.main`
  max-width: 1366px;
  margin: 0 auto;

  position: relative;
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
