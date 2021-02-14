import styled from "@emotion/styled";

const StyledJournalInfo = styled.div`
  height: 100%;
  width: 50%;
  padding: ${(props) => props.theme.spacings.xl};

  & h1 {
    text-align: center;
  }

  & div {
    width: 100%;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 2rem 2rem;

    & span {
      font-weight: bold;
    }
  }
`;

const JournalInfo = () => {
  return (
    <StyledJournalInfo>
      <h1>Published Journals</h1>
      <hr />
      <div>
        <p>
          <span>Title:</span>
        </p>
        <p>Phasellus neque orci, porta a, aliquet quis, semper a, massa. </p>
        <p>
          <span>Author:</span>
        </p>
        <p>Galih Wicaksono</p>
        <p>
          <span>Year:</span>
        </p>
        <p>2020</p>
      </div>
    </StyledJournalInfo>
  );
};

export default JournalInfo;
