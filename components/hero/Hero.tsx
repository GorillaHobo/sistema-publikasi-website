import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";

const StyledHero = styled.div`
  height: 100vh;

  display: flex;
  justify-contents: center;
  align-items: strech;
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroImage />
      <HeroTitle />
    </StyledHero>
  );
};

export default Hero;
