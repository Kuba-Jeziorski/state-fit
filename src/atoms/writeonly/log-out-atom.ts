import { atom } from "jotai";
import { currentTrainingIdAtom } from "../current-training-id-atom";
import { trainingsAtom } from "../trainings-atom";
import { exercisesAtom } from "../exercises-atom";
import { exerciseSetsAtom } from "../exercise-sets-atom";
import { TOKEN_NOT_PROVIDED, TRAINING_OFF } from "../../constants/constants";
import { tokenAtom } from "../token-atom";
import { trainingStateAtom } from "../training-state-atom";

export const logOutAtom = atom(null, (_, set) => {
  set(tokenAtom, TOKEN_NOT_PROVIDED);
  set(trainingStateAtom, TRAINING_OFF);
  set(currentTrainingIdAtom, null);
  set(trainingsAtom, {});
  set(exercisesAtom, {});
  set(exerciseSetsAtom, {});
});
