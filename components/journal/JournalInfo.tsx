import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import Button from "../Button";

const StyledJournalInfo = styled.div`
  flex: 2;

  height: 100%;
  padding: 0 ${(props) => props.theme.spacings.xl};

  & p {
    text-align: left;
    margin: 0 0 1rem 0;
  }

  & div.container {
    width: 100%;

    display: flex;
    flex-direction: column;

    &.title {
      font-weight: bold;
      color: ${(props) => props.theme.colors.blue};
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 1rem;
    width: 100%;
  }
`;

const JournalInfo = () => {
  const { journalState } = useJournalContext();
  const { journals, currentImage } = journalState;
  const currentJournal = journals[currentImage];
  const { date, href, title } = currentJournal;
  return (
    <StyledJournalInfo>
      <div className="container">
        <p>
          <span className="title">Title:</span>
          <br />
          {title}
        </p>
        <p>
          <span className="title">Year:</span>
          <br />
          {date}
        </p>
      </div>
      <Button name="Go to link" href={href} icon="arrow" shadow />
    </StyledJournalInfo>
  );
};

export default JournalInfo;
