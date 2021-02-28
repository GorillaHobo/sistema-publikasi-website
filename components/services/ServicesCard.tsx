import styled from "@emotion/styled";
import { IServices } from "../../contexts/servicesState";

/* import ServicesImage from "./ServicesImage"; */
import ServicesInfo from "./ServicesInfo";
import ServicesInfoIcon from "./ServicesInfoIcon";

const StyledServicesCard = styled.section`
  max-width: 300px;
  margin-bottom: 1rem;
  padding: 1rem;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity ease ${(props) => props.theme.speed.slow},
    transform ease ${(props) => props.theme.speed.slow};
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicesCard = ({
  service,
  isVisible,
  index,
}: {
  service: IServices;
  isVisible: boolean;
  index: number;
}) => {
  const { alt, desc, image, title, icon } = service;
  return (
    <StyledServicesCard
      className={isVisible ? "active" : ""}
      style={{ transitionDelay: `${200 * index}ms` }}
    >
      {/* <ServicesImage alt={alt} image={image} /> */}
      <ServicesInfoIcon icon={icon} />
      <ServicesInfo title={title} desc={desc} />
    </StyledServicesCard>
  );
};

export default ServicesCard;
