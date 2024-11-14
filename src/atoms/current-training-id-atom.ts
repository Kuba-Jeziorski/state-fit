import { atomWithStorage } from "jotai/utils";

// single training day
export const currentTrainingIdAtom = atomWithStorage<null | string>(
  "currentTrainingId",
  null
);

// kiedy ten id jest nullem i ma mieć nową wartość to trzeba zrobić useSetAtom na tym atomie
