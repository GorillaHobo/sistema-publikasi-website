import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

const StyledJournalCarouselDot = styled.div`
  margin: 8px 0 0 0;

  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.white};

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

const JournalCarouselDot = () => {
  const { journalState, journalDispatch } = useJournalContext();
  const { currentImage, journals } = journalState;
  const arr = [...Array(journals.length)];

  return (
    <StyledJournalCarouselDot>
      {arr.map((_, index) => (
        <Dot
          className={currentImage === index ? "current" : ""}
          onClick={() =>
            journalDispatch({ type: "SET_CURRENT_IMAGE", payload: index })
          }
          key={index}
        />
      ))}
    </StyledJournalCarouselDot>
  );
};

export default JournalCarouselDot;
