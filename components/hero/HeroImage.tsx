import styled from "@emotion/styled";

import Image from "next/image";

const StyledHeroImage = styled.div`
  position: relative;
  width: 50%;
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
