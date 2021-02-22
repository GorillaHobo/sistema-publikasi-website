import { useRef, useState, useEffect } from "react";
import { TestimonyProvider } from "../../contexts/TestimonyContext";
import styled from "@emotion/styled";

import SectionTitle from "../SectionTitle";
import TestimonyCard from "./TestimonyCard";

const options = {
  root: null,
  rootMargin: "-50%",
  treshold: 1,
};

const StyledTestimony = styled.div`
  padding: 2rem;
  opacity: 0;
  transform: translateY(90px);

  transition: opacity ease ${(props) => props.theme.speed.slow},
    transform ease ${(props) => props.theme.speed.slow};
  &.red {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Testimony = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting && true);
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      callbackFunction,
      options
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options, callbackFunction]);

  return (
    <TestimonyProvider>
      <StyledTestimony ref={containerRef} className={isVisible ? "red" : ""}>
        <SectionTitle title="Testimonies" margin="large" />
        <TestimonyCard />
      </StyledTestimony>
    </TestimonyProvider>
  );
};

export default Testimony;
