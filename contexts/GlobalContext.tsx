import { useContext, useState } from "react";

import { NavbarContext } from "./NavContext";

const GlobalProvider = ({ children }) => {
  const [navState, setNavState] = useState({ sidebarState: false });

  return (
    <NavbarContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarState = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbarDispatch must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, useNavbarState };
