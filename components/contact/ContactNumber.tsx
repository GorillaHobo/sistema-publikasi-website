import styled from "@emotion/styled";

import {
  FaPhone as Phone,
  FaMailBulk as Mail,
  FaHome as Home,
} from "react-icons/fa";

const StyledContactNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & dd {
    margin: 0;
  }
`;

const StyledItems = styled.div``;
const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  & p {
    margin: 0;
  }

  & svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  & h4 {
    margin: 0;
  }
`;

const ContactNumber = () => {
  return (
    <StyledContactNumber>
      <h2>Contact Us: </h2>
      <StyledItems>
        <StyledItem>
          <Phone />
          <p>0825 1234 5678</p>
        </StyledItem>
        <StyledItem>
          <Mail />
          <p>sistema@publikasi.com</p>
        </StyledItem>
        <StyledItem>
          <Home />
          <p>Jl. Kebenaran no.100 Pajajaran Yogyakarta</p>
        </StyledItem>
      </StyledItems>
    </StyledContactNumber>
  );
};

export default ContactNumber;
