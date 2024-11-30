import { atom } from "jotai";
import { exercisesAtom } from "../exercises-atom";

export const currentExerciseSetsAtom = (id: string) =>
  atom((get) => {
    const exercises = get(exercisesAtom);
    return exercises[id];
  });
