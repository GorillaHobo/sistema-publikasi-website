import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import Counter from "../Counter";

const StyledHero = styled.div`
  height: 100vh;
  margin-top: ${(props) => props.theme.spacings.xl};

  &.index {
    margin-bottom: 7rem;
  }

  display: flex;
  justify-contents: center;
  align-items: strech;
  position: relative;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 100vh;
    margin-top: 0;

    &.index {
      height: calc(100vh - 3rem);
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 100vh;
    &.index {
      margin-bottom: 25rem;
    }
  }
`;

const Hero = ({ page }: { page: "index" | "about" | "contact" }) => {
  return (
    <StyledHero className={page === "index" && "index"}>
      <HeroImage page={page} />
      <HeroTitle page={page} />
      {page === "index" && <Counter />}
    </StyledHero>
  );
};

export default Hero;
