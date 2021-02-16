import styled from "@emotion/styled";

const StyledLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
