import { ExerciseSet } from "../constants/types";

export const hasTime = (
  set: ExerciseSet
): set is Extract<ExerciseSet, { time: number }> => {
  return "time" in set;
};
