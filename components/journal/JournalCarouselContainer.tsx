import styled from "@emotion/styled";

import JournalCarouselImage from "./JournalCarouselImage";

const StyledJournalCarouselContainer = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  opacity: 0;
  top: 50%;
  left: 50%;

  transition: opacity ease 500ms;
  display: none;

  &.active {
    opacity: 1;
    transform: scale(1.1);
    display: block;
  }
`;

const JournalCarouselContainer = ({
  item,
  className,
}: {
  item: { image: string; alt: string };
  className: string;
}) => {
  return (
    <StyledJournalCarouselContainer className={className}>
      <JournalCarouselImage item={item} />
    </StyledJournalCarouselContainer>
  );
};

export default JournalCarouselContainer;
