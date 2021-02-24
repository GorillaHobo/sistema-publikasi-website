import { IconType } from "react-icons";
import { AiOutlinePhone as Phone } from "react-icons/ai";
import { FaMapMarkedAlt as Map, FaWhatsapp as Whatsapp } from "react-icons/fa";
import { GrMail as Mail } from "react-icons/gr";
import styled from "@emotion/styled";
import {
  contactsState,
  IContact,
  IContactType,
} from "../../contexts/ContactContext";

const StyledContacts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const StyledContact = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & h4 {
    color: ${(props) => props.theme.colors.blue};
    margin-top: 0.7rem;
  }
  & p {
    margin-top: 0;
  }
  & h4,
  p {
    margin-bottom: 0;
  }
`;
const IconContainer = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

const Contact = ({ contact }: { contact: IContact }): JSX.Element | null => {
  const { name, items } = contact;

  const getIcon = ({ name, size }: { name: IContactType; size?: number }) => {
    switch (name) {
      case "Address":
        return <Map size={size} />;
      case "Email":
        return <Mail size={size} />;
      case "Phone":
        return <Phone size={size} />;
      case "Whatsapp":
        return <Whatsapp size={size} />;
      default:
        null;
    }
  };

  return (
    <StyledContact>
      <IconContainer>{getIcon({ name: name, size: 40 })}</IconContainer>
      <h4>{name.toUpperCase()}</h4>
      <div>
        {items.map((item) => (
          <div>
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </StyledContact>
  );
};

const ContactNumber = () => {
  return (
    <StyledContacts>
      {contactsState.map((contact, index) => (
        <Contact contact={contact} key={contact.name} />
      ))}
    </StyledContacts>
  );
};

export default ContactNumber;
