import { atom } from "jotai";
import { trainingStateAtom } from "../training-state-atom";
import { currentTrainingIdAtom } from "../current-training-id-atom";
import { trainingsAtom } from "../trainings-atom";
import { exercisesAtom } from "../exercises-atom";
import { exerciseSetsAtom } from "../exercise-sets-atom";
import { TRAINING_OFF } from "../../constants/constants";

export const trainingFinishAtom = atom(null, (_, set) => {
  set(trainingStateAtom, TRAINING_OFF);
  set(currentTrainingIdAtom, null);
  set(trainingsAtom, {});
  set(exercisesAtom, {});
  set(exerciseSetsAtom, {});
});
