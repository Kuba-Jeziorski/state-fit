import { atom } from "jotai";
import { trainingsAtom } from "../trainings-atom";
import { currentTrainingIdAtom } from "../current-training-id-atom";

export const startTrainingAtom = atom(null, (get, set) => {
  const uuid = crypto.randomUUID();
  const oldTrainings = get(trainingsAtom);

  set(trainingsAtom, {
    ...oldTrainings,
    [uuid]: {
      id: uuid,
      date: Date.now(),
      exerciseIds: [],
    },
  });

  set(currentTrainingIdAtom, uuid);
});
