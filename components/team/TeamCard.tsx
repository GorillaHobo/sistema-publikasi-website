import styled from "@emotion/styled";
import { IPerson } from "../../contexts/TeamContext";
import Image from "next/image";

const StyledTeamCard = styled.div`
  box-shadow: ${(props) => props.theme.shadows.large};

  height: 370px;
  width: 300px;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & h3 {
    margin: 0.5rem 0;
  }
  & h5 {
    margin: 0;
  }
`;

const StyledTeamImage = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledInfo = styled.div``;

const TeamCard = ({ person }: { person: IPerson }) => {
  const { email, image, name, position } = person;
  return (
    <StyledTeamCard>
      <StyledTeamImage>
        <Image src={image} layout="fill" objectFit="cover" />
      </StyledTeamImage>
      <StyledInfo>
        <h3>{name}</h3>
        <h5>{position}</h5>
        <h5>{email}</h5>
      </StyledInfo>
    </StyledTeamCard>
  );
};

export default TeamCard;
