import { ExerciseSets } from "../constants/types";
import { atomWithStorage } from "jotai/utils";

// all sets of single exercise (i.e. Dumbbells flat bench press)
export const exerciseSetsAtom = atomWithStorage<ExerciseSets>(
  "exercise-sets",
  {}
);
