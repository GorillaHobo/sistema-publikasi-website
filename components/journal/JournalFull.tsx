import Image from "next/image";
import { useJournalContext } from "../../contexts/JournalContext";

import styled from "@emotion/styled";

const StyledJournalFull = styled.div`
  background-color: rgba(0, 0, 0, 90%);
  color: white;

  padding: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 1002;
`;

const JournalFull = () => {
  const { journalState } = useJournalContext();
  const { journals, currentImage } = journalState;
  const current = journals[currentImage];

  return (
    <StyledJournalFull>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image
          src={current.image}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={current.alt}
        />
      </div>
    </StyledJournalFull>
  );
};

export default JournalFull;
