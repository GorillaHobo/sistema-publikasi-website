import Image from "next/image";
import styled from "@emotion/styled";

const StyledJournalCarouselImage = styled.div`
  background-color: white;
  position: relative;
  margin: 0 3rem;
  box-shadow: ${(props) => props.theme.shadows.large};

  ${(props) => props.theme.transition.fade};
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
        layout="intrinsic"
        height={530}
        width={370}
        quality={100}
        alt={item.alt}
      />
    </StyledJournalCarouselImage>
  );
};

export default JournalCarouselImage;
