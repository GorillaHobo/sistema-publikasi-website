import { useRef } from "react";
import useLazyLoad from "../../lib/useLazyLoader";
import styled from "@emotion/styled";
import { servicesState } from "../../contexts/servicesState";

import ServicesCard from "./ServicesCard";
import SectionTitle from "../SectionTitle";

const StyledServices = styled.div`
  padding: ${(props) => props.theme.spacings.md};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: ${(props) => props.theme.spacings.sm};
  }
`;

const Services = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useLazyLoad({ elementRef: containerRef });
  return (
    <>
      <SectionTitle title="Services" margin="large" />
      <StyledServices ref={containerRef}>
        {servicesState.map((service, index) => (
          <ServicesCard
            service={service}
            key={index}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </StyledServices>
    </>
  );
};

export default Services;
