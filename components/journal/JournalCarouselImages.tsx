import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import JournalCarouselDot from "./JournalCarouselDot";
import JournalCarouselImage from "./JournalCarouselImage";
import JournalCarouselArrow from "./JournalCarouselArrow";

const StyledJournalCarouselImages = styled.div`
  background: radial-gradient(#458588, #336366);
  width: 70%;
  height: 100vh;
  position: relative;

  user-select: none;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
  }
`;

const JournalCarouselImages = () => {
  const { journalState } = useJournalContext();
  const { currentImage, journals } = journalState;

  return (
    <StyledJournalCarouselImages>
      <JournalCarouselArrow direction="left" />
      {journals.map((journal, index) => (
        <JournalCarouselImage
          current={currentImage}
          index={index}
          journal={journal}
          key={index}
        />
      ))}
      <JournalCarouselDot />
      <JournalCarouselArrow direction="right" />
    </StyledJournalCarouselImages>
  );
};

export default JournalCarouselImages;
