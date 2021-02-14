import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";

const StyledHero = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.spacings.l};

  display: flex;
  justify-contents: center;
  align-items: strech;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
    padding: 0;
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
