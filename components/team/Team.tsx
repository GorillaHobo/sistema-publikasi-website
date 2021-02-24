import styled from "@emotion/styled";
import { teamState } from "../../contexts/TeamContext";

import TeamCard from "./TeamCard";

const StyledTeam = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Team = () => {
  return (
    <StyledTeam>
      {teamState.map((person, index) => (
        <TeamCard person={person} key={index} />
      ))}
    </StyledTeam>
  );
};

export default Team;
