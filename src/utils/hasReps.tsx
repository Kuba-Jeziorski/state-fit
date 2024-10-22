import { ExerciseSet } from "../constants/types";

export const hasReps = (
  set: ExerciseSet
): set is Extract<ExerciseSet, { reps: number }> => {
  return "reps" in set;
};
