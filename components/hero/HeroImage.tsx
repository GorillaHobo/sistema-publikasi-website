import styled from "@emotion/styled";

import Image from "next/image";

const StyledHeroImage = styled.div`
  position: relative;
  width: 50%;
  background-color: white;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const HeroImage: React.FC = () => {
  return (
    <StyledHeroImage>
      <Image
        src="/hero.jpg"
        layout="fill"
        alt="Picture of the author"
        objectFit="cover"
      />
    </StyledHeroImage>
  );
};

export default HeroImage;
