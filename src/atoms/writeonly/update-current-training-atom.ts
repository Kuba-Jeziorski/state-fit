import { atom } from "jotai";
import { trainingsAtom } from "../trainings-atom";
import { currentTrainingIdAtom } from "../current-training-id-atom";
import { ExerciseId } from "../../constants/types";

type Payload = {
  id: ExerciseId;
};

export const updateCurrentTrainingAtom = atom(
  null,
  (get, set, payload: Payload) => {
    const trainings = get(trainingsAtom);
    const currentTrainingId = get(currentTrainingIdAtom);

    if (currentTrainingId === null) {
      throw new Error("current triannig id is null!");
    }

    const defaultTrainingExercise = {
      id: currentTrainingId,
      date: Date.now(),
      exerciseIds: [payload.id],
    };

    const currentTraining =
      trainings[currentTrainingId] || defaultTrainingExercise;

    set(trainingsAtom, {
      ...trainings,
      [currentTrainingId]: {
        ...currentTraining,
        exerciseIds: [...currentTraining.exerciseIds, payload.id],
      },
    });
  }
);
