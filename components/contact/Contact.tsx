import styled from "@emotion/styled";
import ContactNumber from "./ContactNumber";
import SectionTitle from "../SectionTitle";

const StyledContact = styled.div`
  padding: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <>
      <SectionTitle title="Get in Touch" />
      <StyledContact>
        <ContactNumber />
      </StyledContact>
    </>
  );
};

export default Contact;
