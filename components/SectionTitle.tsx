import styled from "@emotion/styled";

type IMargin = "none" | "medium" | "large";

const StyledTitle = styled.div`
  margin-top: 4rem;
  text-align: center;

  &.none {
    margin-top: 0;
  }

  &.medium {
    margin-top: 2;
  }

  &.large {
    margin-top: 4;
  }

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
  margin = "none",
}: {
  title: string;
  margin?: IMargin;
}) => {
  return (
    <StyledTitle className={margin}>
      <h1>{title}</h1>
    </StyledTitle>
  );
};

export default SectionTitle;
