import styled from "@emotion/styled";
import { IServices } from "../../contexts/servicesState";

import ServicesImage from "./ServicesImage";
import ServicesInfo from "./ServicesInfo";

const StyledServicesCard = styled.section`
  box-shadow: ${(props) => props.theme.shadows.large};
  padding: 2rem;
  margin-bottom: 1rem;

  width: 100%;

  display: flex;

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 1rem;
    flex-direction: column-reverse;
  }
`;

const ServicesCard = ({ service }: { service: IServices }) => {
  const { alt, desc, image, title } = service;
  return (
    <StyledServicesCard>
      <ServicesInfo title={title} desc={desc} />
      <ServicesImage alt={alt} image={image} />
    </StyledServicesCard>
  );
};

export default ServicesCard;
