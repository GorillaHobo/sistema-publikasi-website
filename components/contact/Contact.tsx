import styled from "@emotion/styled";
import ContactNumber from "./ContactNumber";
import ContactAddress from "./ContactAddress";

const StyledContact = styled.div`
  padding: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const Contact = () => {
  return (
    <StyledContact>
      <ContactNumber />
      <ContactAddress />
    </StyledContact>
  );
};

export default Contact;
