import { createContext, Dispatch, SetStateAction } from "react";

interface INavState {
  sidebarState: boolean;
}

interface INavProps {
  navState: INavState;
  setNavState: Dispatch<SetStateAction<INavState>>;
}

const NavbarContext = createContext<INavProps | undefined>(undefined);

export { NavbarContext };
