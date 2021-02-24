import { createContext, useReducer, useContext } from "react";
import { initialJournalState } from "./journalState";

export type IJournalState = typeof initialJournalState;

type IActions =
  | { type: "SET_CURRENT_IMAGE"; payload: number }
  | { type: "NEXT_IMAGE" }
  | { type: "PREV_IMAGE" };

type IProps = {
  journalState: IJournalState;
  journalDispatch: React.Dispatch<IActions>;
};

const JournalReducer = (state: IJournalState, action: IActions) => {
  const length = state.journals.length;
  switch (action.type) {
    case "SET_CURRENT_IMAGE":
      return { ...state, currentImage: action.payload };
    case "NEXT_IMAGE":
      return {
        ...state,
        currentImage:
          state.currentImage + 1 >= length ? 0 : state.currentImage + 1,
      };
    case "PREV_IMAGE":
      return {
        ...state,
        currentImage:
          state.currentImage - 1 < 0 ? length - 1 : state.currentImage - 1,
      };
    default:
      throw new Error("Reducer type is not valid.");
  }
};

const JournalContext = createContext<IProps | undefined>(undefined);

const JournalProvider = ({ children }) => {
  const [journalState, journalDispatch] = useReducer(
    JournalReducer,
    initialJournalState
  );
  return (
    <JournalContext.Provider value={{ journalState, journalDispatch }}>
      {children}
    </JournalContext.Provider>
  );
};

const useJournalContext = () => {
  const context = useContext(JournalContext);
  if (context === undefined) {
    throw new Error("UseJournalContext must be used within a GlobalProvider");
  }
  return context;
};

export { JournalProvider, useJournalContext };
