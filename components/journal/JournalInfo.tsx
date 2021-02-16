import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

const StyledJournalInfo = styled.div`
  flex: 2;

  height: 100%;
  padding: ${(props) => props.theme.spacings.xl};

  & h1 {
    text-align: center;
  }
  & p {
    text-align: left;
  }

  & div {
    width: 100%;

    display: flex;
    flex-direction: column;

    & span {
      font-weight: bold;
    }
  }
`;

const JournalInfo = () => {
  const { journalState } = useJournalContext();
  const { journals, currentImage } = journalState;
  const currentJournal = journals[currentImage];
  return (
    <StyledJournalInfo>
      <div>
        <p>
          <span>Title:</span>
          <br />
          {currentJournal.title}
        </p>
        <p>
          <span>Author:</span>
          <br />
          {currentJournal.author}
        </p>
        <p>
          <span>Year:</span>
          <br />
          {currentJournal.date}
        </p>
      </div>
    </StyledJournalInfo>
  );
};

export default JournalInfo;
