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
      throw new Error("current triannig is null!");
    }

    const currentTraining = trainings[currentTrainingId];
    set(trainingsAtom, {
      ...trainings,
      [currentTrainingId]: {
        ...currentTraining,
        exerciseIds: [...currentTraining.exerciseIds, payload.id],
      },
    });
  }
);
