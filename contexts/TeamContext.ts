export interface IPerson {
  name: string;
  position: string;
  image: string;
  email: string;
}

type ITeam = IPerson[];

export const teamState: ITeam = [
  {
    name: "Alessandro Del Piero",
    position: "Striker",
    image: "/team/delpiero.jpg",
    email: "delpiero@gmail.com",
  },
  {
    name: "Andrea Pirlo",
    position: "Midfielder",
    image: "/pirlo.jpeg",
    email: "pirlo@gmail.com",
  },
  {
    name: "Gianluigi Buffon",
    position: "GoalKeeper",
    image: "/team/buffon.jpg",
    email: "buffon@gmail.com",
  },
  {
    name: "Paolo Dybala",
    position: "Striker",
    image: "/team/dybala.jpg",
    email: "dybala@gmail.com",
  },
  {
    name: "Cristiano Ronaldo",
    position: "Striker",
    image: "/team/ronaldo.jpg",
    email: "ronaldo@gmail.com",
  },
  {
    name: "Claudio Marchisio",
    position: "Midfielder",
    image: "/team/marchisio.jpg",
    email: "marchisio@gmail.com",
  },
];
