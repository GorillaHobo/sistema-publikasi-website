import {
  JournalProvider,
  useJournalContext,
} from "../../contexts/JournalContext";
import styled from "@emotion/styled";

const StyledJournal = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.spacings.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Testing = () => {
  const { journalState, journalDispatch } = useJournalContext();
  return (
    <div>
      <h1>{journalState.currentImage}</h1>
      <button
        onClick={() =>
          journalDispatch({ type: "SET_CURRENT_IMAGE", payload: 1 })
        }
      >
        set to 1
      </button>
      <button onClick={() => journalDispatch({ type: "PREV_IMAGE" })}>
        Prev
      </button>
      <button onClick={() => journalDispatch({ type: "NEXT_IMAGE" })}>
        Next
      </button>
    </div>
  );
};

const Journal = () => {
  return (
    <JournalProvider>
      <StyledJournal>
        <Testing />
      </StyledJournal>
    </JournalProvider>
  );
};

export default Journal;
