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
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: column;
    padding: ${(props) => props.theme.spacings.sm};
  }
`;

const Journal = () => {
  return (
    <JournalProvider>
      <SectionTitle title="Publised Journals" />
      <StyledJournal>
        <JournalCarouselImages />
        <JournalInfo />
      </StyledJournal>
    </JournalProvider>
  );
};

export default Journal;
