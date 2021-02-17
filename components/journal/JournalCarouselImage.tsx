import Image from "next/image";
import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

const StyledJournalCarouselImage = styled.div`
  width: 100%;
  height: 95%;
  position: relative;
  margin: 1rem 1rem;

  transition: transform ease 300ms;
  &:hover {
    transform: scale(1.01);
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
        layout="fill"
        quality={100}
        objectFit="contain"
        alt={current.alt}
      />
    </StyledJournalCarouselImage>
  );
};

export default JournalCarouselImage;
