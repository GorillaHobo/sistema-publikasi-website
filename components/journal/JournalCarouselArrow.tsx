import styled from "@emotion/styled";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const StyledJournalCarouselArrow = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;
  user-select: none;

  &.right {
    right: 36px;
  }
  &.left {
    left: 36px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const JournalCarouselArrow = ({
  isRight,
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
