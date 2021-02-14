import styled from "@emotion/styled";
import JournalCarousel from "./JournalCarousel";

const StyledJournal = styled.div`
  position: relative
  height: 100vh;
`;

const Journal = () => {
  return (
    <StyledJournal>
      <JournalCarousel />
    </StyledJournal>
  );
};

export default Journal;
