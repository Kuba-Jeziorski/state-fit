import { atom } from "jotai";
import { currentTrainingIdAtom } from "../current-training-id-atom";
import { trainingsAtom } from "../trainings-atom";

export const currentTrainingAtom = atom((get) => {
  const currentTrainingId = get(currentTrainingIdAtom);
  const trainings = get(trainingsAtom);

  if (currentTrainingId === null) {
    throw new Error("current triannig is null!");
  }

  return trainings[currentTrainingId];
});
