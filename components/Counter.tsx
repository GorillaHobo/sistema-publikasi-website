import { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface INumber {
  number: number;
  name: string;
  modifier?: string;
}

type INumbers = INumber[];

const numbers: INumbers = [
  {
    name: "Some Counter",
    number: 500,
  },
  {
    name: "Another Counter",
    number: 1000,
    modifier: "+",
  },
  {
    name: "Yet Another",
    number: 720,
  },
  {
    name: "Percentage",
    number: 95,
    modifier: "%",
  },
];

const StyledCounter = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  list-style: none;
  box-shadow: ${(props) => props.theme.shadows.large};

  width: 100%;
  padding: 1.5rem;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -4.1rem;
  left: 0;
  right: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 91%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 1rem;

    flex-direction: column;
    bottom: -340px;
  }
`;

const StyledNumber = styled.li`
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-right: 1px solid ${(props) => props.theme.colors.blackLight};

  & h1 {
    font-size: 3rem;
  }
  & h5 {
    font-size: 1.2rem;
  }
  & h1,
  h5 {
    margin: 0;
  }

  &:last-child {
    border-right: none;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 0 2rem;
    & h1 {
      font-size: 2.5rem;
    }
    & h5 {
      font-size: 1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 7rem;
    width: 80%;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.blackLight};

    &:last-child {
      border: none;
    }
  }
`;

const easeOutQuad = (t: number): number => t * (2 - t);
const frameDuration: number = 1000 / 60;
const CountUpAnimation = ({
  children,
  duration = 2000,
}: {
  children: number;
  duration?: number;
}) => {
  const countTo = children;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);
  return <>{Math.floor(count)}</>;
};

const Number = ({ num }: { num: INumber }) => {
  const { name, number, modifier } = num;
  return (
    <StyledNumber>
      <h1>
        <CountUpAnimation>{number}</CountUpAnimation>
        {modifier}
      </h1>
      <h5>{name}</h5>
    </StyledNumber>
  );
};

const Counter = () => {
  return (
    <StyledCounter>
      {numbers.map((num, index) => (
        <Number num={num} key={index} />
      ))}
    </StyledCounter>
  );
};

export default Counter;
