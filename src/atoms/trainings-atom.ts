import { Trainings } from "../constants/types";
import { atomWithStorage } from "jotai/utils";

// all trainings
export const trainingsAtom = atomWithStorage<Trainings>("trainings", {});
