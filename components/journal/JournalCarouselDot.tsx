import styled from "@emotion/styled";
import { useJournalState } from "../../contexts/JournalContext";
const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.blackLight};

  height: 12px;
  width: 12px;
  margin: 0 6px;

  border-radius: 50%;

  &.current {
    background-color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledJournalCarouselDot = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JournalCarouselDot = ({
  length,
  current,
  selectCurrentImage,
}: {
  length: number;
  current: number;
  selectCurrentImage?: (newCurrent: number) => void;
}) => {
  const arr: number[] = [...Array(length + 1)];

  return (
    <StyledJournalCarouselDot>
      {arr.map((i, index) => (
        <Dot
          className={current === index ? "current" : ""}
          onClick={() => selectCurrentImage(index)}
        />
      ))}
    </StyledJournalCarouselDot>
  );
};

export default JournalCarouselDot;
