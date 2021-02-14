import styled from "@emotion/styled";
import JournalCarouselImages from "./JournalCarouselImages";
import JournalInfo from "./JournalInfo";

const StyledJournal = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.spacings.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Journal = () => {
  return (
    <StyledJournal>
      <JournalCarouselImages />
      <JournalInfo />
    </StyledJournal>
  );
};

export default Journal;
