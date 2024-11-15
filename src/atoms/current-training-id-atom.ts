import { atomWithStorage } from "jotai/utils";

// single training day ID
export const currentTrainingIdAtom = atomWithStorage<null | string>(
  "currentTrainingId",
  null
);
