import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTestimonyContext } from "../../contexts/TestimonyContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import TestimonyDots from "./TestimonyDots";
import TestimonyPerson from "./TestimonyPerson";

const StyledTestimonyCard = styled.div`
  padding: 2rem;

  box-shadow: ${(props) => props.theme.shadows.large};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & svg {
    color: ${(props) => props.theme.colors.blue};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 1rem;
  }
`;

const TestimonyCard = () => {
  const { testimony, setTestimony } = useTestimonyContext();
  const { current, testimonies } = testimony;
  const [stop, setStop] = useState(false);

  const changeCurrent = (newCurrent: number) => {
    setStop(true);
    setTestimony({ ...testimony, current: newCurrent });
  };

  const shiftCurrent = () => {
    setTestimony({
      ...testimony,
      current: current + 1 >= testimonies.length ? 0 : current + 1,
    });
  };

  useEffect(() => {
    if (stop) {
    }
    const timer = setInterval(() => {
      shiftCurrent();
    }, 8000);
    return () => clearInterval(timer);
  });

  return (
    <StyledTestimonyCard>
      <SwitchTransition>
        <CSSTransition key={current} timeout={500} classNames="fade">
          <TestimonyPerson />
        </CSSTransition>
      </SwitchTransition>
      <TestimonyDots
        changeCurrent={changeCurrent}
        current={current}
        length={testimonies.length}
      />
    </StyledTestimonyCard>
  );
};

export default TestimonyCard;
