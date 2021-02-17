import { JournalProvider } from "../../contexts/JournalContext";
import styled from "@emotion/styled";

import SectionTitle from "../SectionTitle";
import JournalInfo from "./JournalInfo";
import JournalCarouselImages from "./JournalCarouselImages";

const StyledJournal = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.spacings.md};
  display: flex;
  align-items: center;

  & h1 {
    text-align: center;
    color: red;
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const Journal = () => {
  return (
    <JournalProvider>
      <SectionTitle title="Published Journals" />
      <StyledJournal>
        <JournalCarouselImages />
        <JournalInfo />
      </StyledJournal>
    </JournalProvider>
  );
};

export default Journal;
