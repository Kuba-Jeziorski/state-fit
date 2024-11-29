import { atomWithStorage } from "jotai/utils";
import { AppState } from "../constants/types";
import { LOGGED_OUT } from "../constants/constants";

export const appStateAtom = atomWithStorage<AppState>("appState", LOGGED_OUT);
