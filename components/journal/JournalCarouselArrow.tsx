import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import {
  FaChevronCircleRight as RightArrow,
  FaChevronCircleLeft as LeftArrow,
} from "react-icons/fa";

type IArrow = "left" | "right";

const StyledJournalCarouselArrow = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 2.3rem;
  user-select: none;
  z-index: 80;

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
    color: ${(props) => props.theme.colors.whiteDark};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 50%;
  }
`;

const JournalCarouselArrow = ({ direction }: { direction: IArrow }) => {
  const { journalDispatch } = useJournalContext();
  return (
    <StyledJournalCarouselArrow
      onClick={
        direction === "right"
          ? () => journalDispatch({ type: "NEXT_IMAGE" })
          : () => journalDispatch({ type: "PREV_IMAGE" })
      }
      className={direction}
    >
      {direction === "right" ? <RightArrow /> : <LeftArrow />}
    </StyledJournalCarouselArrow>
  );
};

export default JournalCarouselArrow;
