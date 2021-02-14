import styled from "@emotion/styled";

const StyledJournalInfo = styled.div`
  width: 50%;
  padding: ${(props) => props.theme.spacings.xl};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JournalInfo = () => {
  return (
    <StyledJournalInfo>
      <h1>Hello Journal</h1>
      <p>
        Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non
        orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
        lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam
        tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede.
        Etiam vel neque nec dui dignissim bibendum. Vivamus id enim. Phasellus
        neque orci, porta a, aliquet quis, semper a, massa. Phasellus purus.
        Pellentesque tristique imperdiet tortor. Nam euismod tellus id erat.
      </p>
    </StyledJournalInfo>
  );
};

export default JournalInfo;
