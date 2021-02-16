import styled from "@emotion/styled";

const StyledServicesInfo = styled.div`
  margin-right: 2rem;
`;

const ServicesInfo = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <StyledServicesInfo>
      <h1>{title}</h1>
      <p>{desc}</p>
    </StyledServicesInfo>
  );
};

export default ServicesInfo;
