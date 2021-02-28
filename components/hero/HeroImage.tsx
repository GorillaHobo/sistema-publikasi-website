import styled from "@emotion/styled";
import { heroState } from "../../contexts/HeroContext";

import Image from "next/image";

const StyledHeroImage = styled.div<{ src: string }>`
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const HeroImage = ({ page }: { page: string }) => {
  const { src, alt } = heroState[page];

  return (
    <StyledHeroImage src={src}>
      {/* <Image
        className="image"
        src={src}
        layout="fill"
        alt={alt}
        objectFit="cover"
        objectPosition="fixed"
        priority={true}
      /> */}
      <Overlay />
    </StyledHeroImage>
  );
};

export default HeroImage;
