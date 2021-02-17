import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

import { initialTestimonyState } from "./testimonyState";

export interface ITestimoniState {
  current: number;
  testimonies: typeof initialTestimonyState;
}

interface IProps {
  testimony: ITestimoniState;
  setTestimony: Dispatch<SetStateAction<ITestimoniState>>;
}

const TestimonyContext = createContext<IProps | undefined>(undefined);

const TestimonyProvider = ({ children }) => {
  const [testimony, setTestimony] = useState({
    current: 0,
    testimonies: initialTestimonyState,
  });

  return (
    <TestimonyContext.Provider value={{ testimony, setTestimony }}>
      {children}
    </TestimonyContext.Provider>
  );
};

const useTestimonyContext = () => {
  const context = useContext(TestimonyContext);
  if (context === undefined) {
    throw new Error("Can't use this hook outside of provider.");
  }
  return context;
};

export { TestimonyProvider, useTestimonyContext };
