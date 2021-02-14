import { useState } from "react";
import styled from "@emotion/styled";
import { ICarouselImages, carouselImages } from "./carouselImages";

import JournalCarouselContainer from "./JournalCarouselContainer";
import JournalCarouselArrow from "./JournalCarouselArrow";

const StyledJournalCarousel = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.green};
`;

const JournalCarousel = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const length = carouselImages.length;

  const nextImage = (): void => {
    setCurrentImage(length - 1 < currentImage + 1 ? 0 : currentImage + 1);
  };

  const prevImage = (): void => {
    setCurrentImage(0 > currentImage - 1 ? length - 1 : currentImage - 1);
  };

  return (
    <StyledJournalCarousel>
      <JournalCarouselArrow isRight={false} onClick={prevImage} />
      {carouselImages.map((item, index) => (
        <JournalCarouselContainer
          item={item}
          key={index}
          className={index === currentImage && "active"}
        />
      ))}
      <JournalCarouselArrow isRight onClick={nextImage} />
    </StyledJournalCarousel>
  );
};

export default JournalCarousel;
