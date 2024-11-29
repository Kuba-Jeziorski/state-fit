import { atom } from "jotai";
import { exercisesAtom } from "../exercises-atom";
import { updateCurrentTrainingAtom } from "./update-current-training-atom";

export const exerciseCreateAtom = atom(null, (get, set) => {
  const id = crypto.randomUUID();

  const newExercise = {
    id: id,
    exerciseTypeId: `a-${id}`,
    exerciseSetIds: [],
  };

  set(exercisesAtom, {
    ...get(exercisesAtom),
    [id]: newExercise,
  });

  set(updateCurrentTrainingAtom, { id });
});
