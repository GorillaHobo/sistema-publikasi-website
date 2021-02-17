import styled from "@emotion/styled";
import { servicesState } from "../../contexts/servicesState";

import ServicesCard from "./ServicesCard";
import SectionTitle from "../SectionTitle";

const StyledServices = styled.div`
  padding: ${(props) => props.theme.spacings.l};

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: ${(props) => props.theme.spacings.sm};
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <SectionTitle title={"Services"} />
      {servicesState.map((service, index) => (
        <ServicesCard service={service} key={index} />
      ))}
    </StyledServices>
  );
};

export default Services;
