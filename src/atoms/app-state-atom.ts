import { atomWithStorage } from "jotai/utils";
import { LOGGED_OUT } from "../constants/constants";
import { AppState } from "../constants/types";

export const appStateAtom = atomWithStorage<AppState>("appState2", LOGGED_OUT);
