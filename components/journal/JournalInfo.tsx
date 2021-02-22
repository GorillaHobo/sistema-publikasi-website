import styled from "@emotion/styled";
import { useJournalContext } from "../../contexts/JournalContext";

import SectionTitle from "../SectionTitle";
import Button from "../Button";

const StyledJournalInfo = styled.div`
  flex: 2;

  height: 100%;
  padding: 0 ${(props) => props.theme.spacings.xl};

  & p {
    text-align: left;
    margin: 0 0 1rem 0;
  }

  & div {
    width: 100%;
    margin-top: ${(props) => props.theme.spacings.l};

    display: flex;
    flex-direction: column;

    & span {
      font-weight: bold;
      color: ${(props) => props.theme.colors.blackLight};
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 1rem;
    width: 100%;
    & div {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

const JournalInfo = () => {
  const { journalState } = useJournalContext();
  const { journals, currentImage } = journalState;
  const currentJournal = journals[currentImage];
  const { date, href, title } = currentJournal;
  return (
    <StyledJournalInfo>
      <SectionTitle title="Published Journals" margin="none" />
      <div>
        <p>
          <span>Title:</span>
          <br />
          {title}
        </p>
        <p>
          <span>Year:</span>
          <br />
          {date}
        </p>
      </div>
      <Button name="Go to link" href={href} icon="arrow" shadow />
    </StyledJournalInfo>
  );
};

export default JournalInfo;
