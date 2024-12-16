import { atom } from "jotai";
import { trainingsAtom } from "../trainings-atom";
import { ExerciseId } from "../../constants/types";
import { currentTrainingAtom } from "../readonly/current-training-atom";

type Payload = {
  id: ExerciseId;
};

export const updateCurrentTrainingAtom = atom(
  null,
  (get, set, payload: Payload) => {
    const currentTraining = get(currentTrainingAtom);
    const trainings = get(trainingsAtom);

    if (currentTraining === undefined) {
      throw new Error(`attempt to update the training that doesn't exist`);
    }

    const currentTrainingId = currentTraining.id;
    console.log(`updateCurrentTrainingAtom`);
    set(trainingsAtom, {
      ...trainings,
      [currentTrainingId]: {
        ...currentTraining,
        exerciseIds: [...currentTraining.exerciseIds, payload.id],
      },
    });
  }
);
