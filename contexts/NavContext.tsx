import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface INavState {
  sidebarState: boolean;
}

interface INavProps {
  navState: INavState;
  setNavState: Dispatch<SetStateAction<INavState>>;
}

const NavContext = createContext<INavProps | undefined>(undefined);

const NavProvider = ({ children }) => {
  const [navState, setNavState] = useState({ sidebarState: false });
  return (
    <NavContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavContext.Provider>
  );
};

const useNavState = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavbarDispatch must be used within a GlobalProvider");
  }
  return context;
};

export { NavProvider, useNavState };
