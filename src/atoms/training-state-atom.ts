import { atomWithStorage } from "jotai/utils";
import { TRAINING_OFF } from "../constants/constants";
import { TrainingState } from "../constants/types";

export const trainingStateAtom = atomWithStorage<TrainingState>(
  "trainingState2",
  TRAINING_OFF
);
