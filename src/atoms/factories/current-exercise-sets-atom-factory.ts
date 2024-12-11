import { atom } from "jotai";
import { exercisesAtom } from "../exercises-atom";
import { exerciseSetsAtom } from "../exercise-sets-atom";

export const currentExerciseSetsAtomFactory = (exerciseId: string) =>
  atom((get) => {
    const exercises = get(exercisesAtom);
    const exercise = exercises[exerciseId];
    if (!exercise) {
      throw new Error(`No exercise - ${exerciseId}`);
    }
    const sets = get(exerciseSetsAtom);
    return exercise.exerciseSetIds
      .map((id) => sets[id])
      .filter((set) => set !== undefined);
  });
