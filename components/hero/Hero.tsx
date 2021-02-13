import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";

const StyledHero = styled.div`
  height: 100vh;

  display: flex;
  justify-contents: center;
  align-items: strech;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
    display: block;
    position: relative;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroTitle />
      <HeroImage />
    </StyledHero>
  );
};

export default Hero;
