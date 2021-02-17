import styled from "@emotion/styled";

const StyledTitle = styled.div`
  text-align: center;
  & h1 {
    font-size: 4rem;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    & h1 {
      font-size: 3rem;
      margin-top: 2rem;
    }
  }
`;

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default SectionTitle;
