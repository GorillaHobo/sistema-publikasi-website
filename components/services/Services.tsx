import styled from "@emotion/styled";
import { servicesState } from "../../contexts/servicesState";

import ServicesCard from "./ServicesCard";

const StyledServices = styled.section`
  padding: ${(props) => props.theme.spacings.l};

  & h1 {
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(props) => props.theme.spacings.sm};
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <h1>Our Services</h1>
      <hr />
      {servicesState.map((service, index) => (
        <ServicesCard service={service} key={index} />
      ))}
    </StyledServices>
  );
};

export default Services;
