import { atomWithStorage } from "jotai/utils";
import {
  TRAINING_MODAL_STATE_FINISH,
  TRAINING_MODAL_STATE_NEW,
  TRAINING_MODAL_STATE_NULL,
} from "../constants/constants";

// new training | finish training | no modal visible
type trainingModalState =
  | typeof TRAINING_MODAL_STATE_NEW
  | typeof TRAINING_MODAL_STATE_FINISH
  | typeof TRAINING_MODAL_STATE_NULL;

export const trainingModalStateAtom = atomWithStorage<trainingModalState>(
  "trainingModal",
  null
);
