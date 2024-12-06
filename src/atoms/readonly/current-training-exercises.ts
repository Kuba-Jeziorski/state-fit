import { atom } from "jotai";
import { currentTrainingAtom } from "./current-training-atom";
import { exercisesAtom } from "../exercises-atom";

export const currentTrainingExercises = atom((get) => {
  const currentTraining = get(currentTrainingAtom);
  const exercises = get(exercisesAtom);

  if (currentTraining === undefined) {
    return [];
  }

  return currentTraining.exerciseIds
    .map((exerciseId) => exercises[exerciseId])
    .filter((exercise) => exercise !== undefined);
});
