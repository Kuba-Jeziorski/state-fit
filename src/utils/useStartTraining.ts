import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { trainingsAtom } from "../atoms/trainings-atom";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";

export const useStartTraining = () => {
  const setTrainings = useSetAtom(trainingsAtom);
  const setCurrentTrainingId = useSetAtom(currentTrainingIdAtom);

  return useCallback(() => {
    const uuid = crypto.randomUUID();
    setTrainings((oldTrainings) => {
      return {
        ...oldTrainings,
        [uuid]: {
          id: uuid,
          date: Date.now(),
          exerciseIds: [],
        },
      };
    });
    setCurrentTrainingId(uuid);
  }, [setTrainings, setCurrentTrainingId]);
};
