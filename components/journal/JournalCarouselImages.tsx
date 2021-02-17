import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import JournalCarouselDot from "./JournalCarouselDot";
import JournalCarouselImage from "./JournalCarouselImage";
import JournalCarouselArrow from "./JournalCarouselArrow";

const StyledJournalCarouselImages = styled.div`
  background: radial-gradient(#458588, #336366);
  height: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 7;

  user-select: none;

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const JournalCarouselImages = () => {
  const { journalState } = useJournalContext();
  const { currentImage } = journalState;

  return (
    <StyledJournalCarouselImages>
      <JournalCarouselArrow />
      <SwitchTransition>
        <CSSTransition key={currentImage} timeout={200} classNames="fade">
          <JournalCarouselImage />
        </CSSTransition>
      </SwitchTransition>
      <JournalCarouselDot />
      <JournalCarouselArrow isRight />
    </StyledJournalCarouselImages>
  );
};

export default JournalCarouselImages;
