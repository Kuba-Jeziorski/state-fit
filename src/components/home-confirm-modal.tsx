import { useAtomValue, useSetAtom } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { logOutAtom } from "../atoms/writeonly/log-out-atom";
import { startTrainingAtom } from "../atoms/writeonly/start-training-atom";
import { useRedirectToTraining } from "../utils/use-redirec-to-training";
import {
  HOME_ACTIVE_BUTTON_LOGOUT,
  HOME_ACTIVE_BUTTON_NULL,
  HOME_ACTIVE_BUTTON_TRAINING,
  LOGGING_CONFIRM_MESSAGE,
  NEW_TRAINING_CONFIRM_MESSAGE,
  TRAINING_ON,
} from "../constants/constants";
import { ConfirmModal } from "./confirm-modal";
import { ActiveHomeButton } from "../constants/types";

type HomeConfirmModal = {
  activeButton: ActiveHomeButton;
  setActiveButton: React.Dispatch<React.SetStateAction<ActiveHomeButton>>;
};

export const HomeConfirmModal = ({
  activeButton,
  setActiveButton,
}: HomeConfirmModal) => {
  const trainingStateValue = useAtomValue(trainingStateAtom);

  const logOut = useSetAtom(logOutAtom);
  const setTraningState = useSetAtom(trainingStateAtom);
  const setStartTraining = useSetAtom(startTrainingAtom);

  const redirectToTraining = useRedirectToTraining();

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const logOutConfirmAccepted = () => {
    setActiveButton(HOME_ACTIVE_BUTTON_NULL);
    logOut();
  };
  const logOutConfirmDeclined = () => {
    setActiveButton(HOME_ACTIVE_BUTTON_NULL);
  };

  const trainingConfirmAccepted = () => {
    setTraningState(TRAINING_ON);
    setActiveButton(HOME_ACTIVE_BUTTON_NULL);
    setStartTraining();
    redirectToTraining();
  };
  const trainingConfirmDeclined = () => {
    setActiveButton(HOME_ACTIVE_BUTTON_NULL);
  };

  if (activeButton === HOME_ACTIVE_BUTTON_NULL) {
    return null;
  }

  if (activeButton === HOME_ACTIVE_BUTTON_TRAINING && !isTrainingOn) {
    return (
      <ConfirmModal
        confirmMessage={NEW_TRAINING_CONFIRM_MESSAGE}
        confirmAcceptFunction={trainingConfirmAccepted}
        confirmDeclineFunction={trainingConfirmDeclined}
      />
    );
  }

  if (activeButton === HOME_ACTIVE_BUTTON_LOGOUT) {
    return (
      <ConfirmModal
        confirmMessage={LOGGING_CONFIRM_MESSAGE}
        confirmAcceptFunction={logOutConfirmAccepted}
        confirmDeclineFunction={logOutConfirmDeclined}
      />
    );
  }
};
