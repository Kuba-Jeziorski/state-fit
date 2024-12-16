import { atom } from "jotai";
import { exercisesAtom } from "../exercises-atom";

export const deleteSetAtom = atom(null, (_, set, payload: string) => {
  set(exercisesAtom, (prevExercises) => {
    const updatedExercises = Object.fromEntries(
      Object.entries(prevExercises).map(([key, exercise]) => {
        if (!exercise) {
          return [key, exercise];
        }

        return [
          key,
          {
            ...exercise,
            exerciseSetIds: exercise.exerciseSetIds?.filter(
              (id) => id !== payload
            ),
          },
        ];
      })
    );

    return updatedExercises;
  });
});
