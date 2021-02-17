import styled from "@emotion/styled";

const StyledTitle = styled.div`
  margin-top: 5rem;
  text-align: center;
  & h1 {
    font-size: 3.6rem;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    & h1 {
      font-size: 3rem;
      margin-top: 2rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    & h1 {
      font-size: 2.5rem;
      margin-top: 1rem;
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
