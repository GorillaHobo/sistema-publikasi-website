import styled from "@emotion/styled";

const StyledServicesInfo = styled.div`
  padding: 1rem;

  & h2,
  p {
    margin: 0.1rem 0 0.1rem 0;
    text-align: center;
  }
`;

const ServicesInfo = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <StyledServicesInfo>
      <h2>{title}</h2>
      <p>{desc}</p>
    </StyledServicesInfo>
  );
};

export default ServicesInfo;
