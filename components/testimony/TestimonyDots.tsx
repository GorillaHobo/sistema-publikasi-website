import styled from "@emotion/styled";

const StyledTestimonyDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
const StyledTestimonyDot = styled.div`
  background-color: ${(props) => props.theme.colors.blackLight};

  height: 15px;
  width: 15px;
  margin: 0 3px;

  display: flex;

  border-radius: 50%;

  transition: background ease 500ms;

  user-select: none;
  &.active {
    background-color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    cursor: pointer;
  }
`;

const TestimonyDots = ({
  length = 1,
  current = 0,
  changeCurrent,
}: {
  length?: number;
  current?: number;
  changeCurrent?: (newCurrent: number) => void;
}) => {
  const arr = [...Array(length)];
  return (
    <StyledTestimonyDots>
      {arr.map((_, index) => (
        <StyledTestimonyDot
          className={index === current && "active"}
          key={index}
          onClick={() => changeCurrent(index)}
        />
      ))}
    </StyledTestimonyDots>
  );
};

export default TestimonyDots;
