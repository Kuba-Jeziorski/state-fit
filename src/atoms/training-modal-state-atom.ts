import { atomWithStorage } from "jotai/utils";

// new training | finish training | no modal visible
type trainingModalState = "new" | "finish" | null;

export const trainingModalStateAtom = atomWithStorage<trainingModalState>(
  "trainingModal",
  null
);
