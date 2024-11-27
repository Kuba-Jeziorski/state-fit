import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
import {
  FINISH_TRAINING_CAPTION,
  HOME_CAPTION,
  TRAINING_CAPTION,
  TRAINING_MODAL_STATE_FINISH,
  TRAINING_MODAL_STATE_NEW,
  TRAINING_OFF,
} from "../constants/constants";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToHome } from "../utils/useRedirectToHome";
import { Button } from "../components/Button";
import { useAtom, useAtomValue } from "jotai";
import { appStateAtom } from "../atoms/app-state-atom";
import { TrainingModal } from "../components/TrainingModal";
import { trainingModalStateAtom } from "../atoms/training-modal-state-atom";
import { useEffect } from "react";
import { trainingStateAtom } from "../atoms/training-state-atom";

export const Training = () => {
  const [trainingModalState, setTrainingModalState] = useAtom(
    trainingModalStateAtom
  );
  const trainingState = useAtomValue(trainingStateAtom);
  const appStateValue = useAtomValue(appStateAtom);

  useEffect(() => {
    if (trainingState === TRAINING_OFF) {
      console.log(`test`);
      setTrainingModalState(TRAINING_MODAL_STATE_NEW);
    }
  }, [setTrainingModalState, trainingState]);

  const redirectToHome = useRedirectToHome();

  const finishTrainingConfirmation = () => {
    setTrainingModalState(TRAINING_MODAL_STATE_FINISH);
  };

  useRedirectIfLoggedOut(appStateValue);
  usePageTitle(TRAINING_CAPTION);

  return (
    <>
      {trainingModalState !== TRAINING_MODAL_STATE_NEW && (
        <>
          <Button
            caption={HOME_CAPTION}
            handleFunction={redirectToHome}
            classes="button primary"
          />
          <Title tag="h1">New training</Title>
          <TrainingForm />
          <Button
            caption={FINISH_TRAINING_CAPTION}
            handleFunction={finishTrainingConfirmation}
            classes="button primary temporary-mt"
          />
        </>
      )}
      <TrainingModal />
    </>
  );
};
