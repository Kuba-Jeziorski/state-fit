import { ExerciseSet } from "../constants/types";

export const hasWeight = (
  set: ExerciseSet
): set is Extract<ExerciseSet, { weight: number }> => {
  return "weight" in set;
};
