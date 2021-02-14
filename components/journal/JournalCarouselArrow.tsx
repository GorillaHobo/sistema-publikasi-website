import styled from "@emotion/styled";
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

  &:hover {
    cursor: pointer;
  }
`;

const JournalCarouselArrow = ({
  isRight = false,
  onClick,
}: {
  isRight?: boolean;
  onClick?: () => void;
}) => {
  return (
    <StyledJournalCarouselArrow
      onClick={onClick}
      className={isRight ? "right" : "left"}
    >
      {isRight ? <AiOutlineRight /> : <AiOutlineLeft />}
    </StyledJournalCarouselArrow>
  );
};

export default JournalCarouselArrow;
