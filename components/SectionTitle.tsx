import styled from "@emotion/styled";

const StyledTitle = styled.div<{ isBlog?: boolean }>`
  margin-top: 4rem;
  text-align: center;
  & h1 {
    font-size: 3.6rem;
    margin: 0;
  }

  &.isBlog {
    margin-top: 8rem;
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

const SectionTitle = ({
  title,
  isBlog = false,
}: {
  title: string;
  isBlog?: boolean;
}) => {
  return (
    <StyledTitle title={title} className={isBlog ? "isBlog" : ""}>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default SectionTitle;
