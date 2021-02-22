import styled from "@emotion/styled";

const StyledHeroTitle = styled.div`
  color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 350px;
  margin: auto;
  margin-bottom: ${(props) => props.theme.spacings.xl};

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 3rem;
  }
`;

const HeroTitle = () => {
  return (
    <StyledHeroTitle>
      <Title>Hello World</Title>
      <p>
        Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec
        facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis
        lacus tellus malesuada massa, quis varius mi purus non odio.
      </p>
    </StyledHeroTitle>
  );
};

export default HeroTitle;
