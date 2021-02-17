import Image from "next/image";
import styled from "@emotion/styled";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTestimonyContext } from "../../contexts/TestimonyContext";

const StyledTestimonyPerson = styled.div`
  min-height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) => props.theme.transition.fade};

  @media ${(props) => props.theme.breakpoints.tablet} {
    min-height: 300px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
  }
`;

const StyledQuote = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledPerson = styled.div`
  display: flex;
`;
const StyledImage = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  margin-right: 1rem;

  border-radius: 50%;
  overflow: hidden;
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  & h3,
  h5 {
    margin: 0;
  }

  & h5 {
    color: ${(props) => props.theme.colors.blackLight};
  }
`;

const TestimonyPerson = () => {
  const { testimony } = useTestimonyContext();
  const { current, testimonies } = testimony;
  const { alt, company, image, name, quote } = testimonies[current];
  return (
    <StyledTestimonyPerson>
      <StyledQuote>
        <FaQuoteLeft />
        <p>{quote}</p>
        <FaQuoteRight style={{ alignSelf: "flex-end" }} />
      </StyledQuote>
      <StyledPerson>
        <StyledImage>
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        </StyledImage>
        <StyledName>
          <h3>{name}</h3>
          <h5>{company}</h5>
        </StyledName>
      </StyledPerson>
    </StyledTestimonyPerson>
  );
};

export default TestimonyPerson;
