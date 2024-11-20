import { Exercises } from "../constants/types";
import { atomWithStorage } from "jotai/utils";

// all exercises of single training day
export const exercisesAtom = atomWithStorage<Exercises>("exercises", {});
