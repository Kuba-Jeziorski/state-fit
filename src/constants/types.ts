import { FINISHED, IN_PROGRESS, PENDING } from "./constants";

export type AppState = typeof PENDING | typeof IN_PROGRESS | typeof FINISHED;

export type StateFunction = React.Dispatch<React.SetStateAction<AppState>>;

export type AppStateChangeFunction = {
  onPush: (newState: AppState) => void;
};
