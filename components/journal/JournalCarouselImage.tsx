import Image from "next/image";
import styled from "@emotion/styled";
import { IJournal } from "../../contexts/journalState";

const StyledJournalCarouselImage = styled.div`
  opacity: 0;
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;

  transform: scale(0.95);
  transition: opacity 500ms ease, transform 500ms ease;
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;

const JournalCarouselImage = ({
  current = 0,
  journal,
  index = 0,
}: {
  current?: number;
  journal?: IJournal;
  index?: number;
}) => {
  const { image, alt } = journal;
  return (
    <StyledJournalCarouselImage className={current === index && "active"}>
      <Image
        src={image}
        layout="fill"
        quality={100}
        alt={alt}
        objectFit="contain"
      />
    </StyledJournalCarouselImage>
  );
};

export default JournalCarouselImage;
