import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const StyledJournalCarouselArrow = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  user-select: none;
  z-index: 100;

  position: absolute;
  top: 48%;

  &.left {
    left: 5%;
  }
  &.right {
    right: 5%;
  }

  transition: color ease 200ms;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
  }
`;

const JournalCarouselArrow = ({ isRight = false }: { isRight?: boolean }) => {
  const { journalDispatch } = useJournalContext();
  return (
    <StyledJournalCarouselArrow
      onClick={
        isRight
          ? () => journalDispatch({ type: "NEXT_IMAGE" })
          : () => ({ type: "PREV_IMAGE" })
      }
      className={isRight ? "right" : "left"}
    >
      {isRight ? <AiOutlineRight /> : <AiOutlineLeft />}
    </StyledJournalCarouselArrow>
  );
};

export default JournalCarouselArrow;
