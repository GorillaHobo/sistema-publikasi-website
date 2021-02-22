import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import Counter from "../Counter";

const StyledHero = styled.div`
  height: 100vh;
  margin-top: ${(props) => props.theme.spacings.xl};
  margin-bottom: 7rem;

  display: flex;
  justify-contents: center;
  align-items: strech;
  position: relative;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: calc(100vh - 3rem);
    margin-top: 0;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 100vh;
    margin-bottom: 25rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroImage />
      <HeroTitle />
      <Counter />
    </StyledHero>
  );
};

export default Hero;
