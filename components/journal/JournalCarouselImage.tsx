import Image from "next/image";
import styled from "@emotion/styled";

const StyledJournalCarouselImage = styled.div`
  width: 400px;
  height: 566px;
  position: relative;
  margin: 0 3rem;
`;

const JournalCarouselImage = ({
  item,
}: {
  item: { image: string; alt: string };
}) => {
  return (
    <StyledJournalCarouselImage>
      <Image
        src={`/journal1/${item.image}.png`}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={item.alt}
      />
    </StyledJournalCarouselImage>
  );
};

export default JournalCarouselImage;
