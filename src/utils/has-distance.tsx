import { ExerciseSet } from "../constants/types";

export const hasDistance = (
  set: ExerciseSet
): set is Extract<ExerciseSet, { distance: number }> => {
  return "distance" in set;
};
