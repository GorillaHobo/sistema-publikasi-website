import styled from "@emotion/styled";

import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import Counter from "../Counter";
import { Props, ReactNode } from "react";

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

const Hero: React.FC<Props> = ({
  page,
  children,
}: {
  page: "index" | "about" | "contact";
  children?: ReactNode;
}) => {
  return (
    <StyledHero className={page === "index" && "index"}>
      <HeroImage page={page} />
      <HeroTitle page={page}>{children}</HeroTitle>
      {page === "index" && <Counter />}
    </StyledHero>
  );
};

export default Hero;
