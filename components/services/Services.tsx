import styled from "@emotion/styled";
import { servicesState } from "../../contexts/servicesState";

import ServicesCard from "./ServicesCard";
import SectionTitle from "../SectionTitle";

const StyledServices = styled.div`
  padding: ${(props) => props.theme.spacings.md};

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: ${(props) => props.theme.spacings.sm};
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <SectionTitle title={"Services"} margin="large" />
      {servicesState.map((service, index) => (
        <div>
          <ServicesCard service={service} key={index} />
        </div>
      ))}
    </StyledServices>
  );
};

export default Services;
