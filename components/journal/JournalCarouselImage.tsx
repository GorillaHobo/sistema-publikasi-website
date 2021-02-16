import Image from "next/image";
import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

const StyledJournalCarouselImage = styled.div`
  background-color: white;
  position: relative;
  margin: 0 3rem;
  box-shadow: ${(props) => props.theme.shadows.large};

  transition: transform ease 300ms;
  &:hover {
    transform: scale(1.05);
  }

  ${(props) => props.theme.transition.fade};
`;

const JournalCarouselImage = () => {
  const { journalState } = useJournalContext();
  const { journals, currentImage } = journalState;
  const current = journals[currentImage];
  return (
    <StyledJournalCarouselImage>
      <Image
        src={current.image}
        layout="intrinsic"
        height={530}
        width={370}
        quality={100}
        alt={current.alt}
      />
    </StyledJournalCarouselImage>
  );
};

export default JournalCarouselImage;
