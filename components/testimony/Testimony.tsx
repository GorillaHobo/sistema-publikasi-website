import { TestimonyProvider } from "../../contexts/TestimonyContext";
import styled from "@emotion/styled";

import SectionTitle from "../SectionTitle";
import TestimonyCard from "./TestimonyCard";

const StyledTestimony = styled.div`
  min-height: 500px;
  padding: 2rem;
`;

const Testimony = () => {
  return (
    <TestimonyProvider>
      <StyledTestimony>
        <SectionTitle title="Testimonies" />
        <TestimonyCard />
      </StyledTestimony>
    </TestimonyProvider>
  );
};

export default Testimony;
