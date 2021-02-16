import { JournalProvider } from "../../contexts/JournalContext";
import styled from "@emotion/styled";
import JournalInfo from "./JournalInfo";
import JournalCarouselImages from "./JournalCarouselImages";
import JournalFull from "./JournalFull";

const StyledJournal = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.spacings.md};
  display: flex;
  align-items: center;

  & h1 {
    text-align: center;
    color: red;
  }
`;
const StyledTitle = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

const Title = () => {
  return (
    <StyledTitle>
      <h1>Publised Journals</h1>
      <hr />
    </StyledTitle>
  );
};

const Journal = () => {
  return (
    <JournalProvider>
      <Title />
      <StyledJournal>
        <JournalCarouselImages />
        <JournalInfo />
      </StyledJournal>
      <JournalFull />
    </JournalProvider>
  );
};

export default Journal;
