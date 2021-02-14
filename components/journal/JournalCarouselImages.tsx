import { useState } from "react";
import styled from "@emotion/styled";
import JournalCarouselImage from "./JournalCarouselImage";
import JournalCarouselArrow from "./JournalCarouselArrow";
import { carouselImages } from "./carouselImages";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import JournalCarouselDot from "./JournalCarouselDot";

const StyledJournalCarouselImages = styled.div`
  background: radial-gradient(#458588, #336366);
  width: 50%;
  height: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JournalCarouselImages = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const length: number = carouselImages.length - 1;

  const nextImage = (): void => {
    setCurrentImage(currentImage + 1 > length ? 0 : currentImage + 1);
  };
  const prevImage = (): void => {
    setCurrentImage(currentImage - 1 < 0 ? length : currentImage - 1);
  };
  const selectCurrentImage = (newCurrent: number): void => {
    setCurrentImage(newCurrent);
  };

  return (
    <StyledJournalCarouselImages>
      <JournalCarouselArrow onClick={prevImage} />
      <div>
        <SwitchTransition>
          <CSSTransition key={currentImage} timeout={500} classNames="fade">
            <JournalCarouselImage item={carouselImages[currentImage]} />
          </CSSTransition>
        </SwitchTransition>
        <JournalCarouselDot
          length={length}
          current={currentImage}
          selectCurrentImage={selectCurrentImage}
        />
      </div>
      <JournalCarouselArrow isRight onClick={nextImage} />
    </StyledJournalCarouselImages>
  );
};

export default JournalCarouselImages;
