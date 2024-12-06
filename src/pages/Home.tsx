import {
  CURRENT_TRAINING_CAPTION,
  HOME_PAGE_TITLE,
  LOGGING_CONFIRM_MESSAGE,
  NEW_TRAINING_CONFIRM_MESSAGE,
  START_NEW_TRAINING_CAPTION,
  TRAINING_ON,
} from "../constants/constants";

import { Title } from "../components/Title";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToTraining } from "../utils/useRedirectToTraining";
import { Button } from "../components/Button";
import { useAtomValue, useSetAtom } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";
import { startTrainingAtom } from "../atoms/writeonly/start-training-atom";

import axios from "axios";
import { logOutAtom } from "../atoms/readonly/log-out-atom";

const FetchButton = () => {
  const [id, setId] = useState(0);

  const testTraining = {
    id: id,
    exercise: "Test Exercise",
    numberOfRows: 5,
  };

  const handleFetch = async () => {
    setId((id) => id + 1);
    const response = await axios.post(
      "http://localhost:3000/trainings",
      testTraining
    );
    alert("Fetch");
    console.log(id);
    console.log(response);
  };

  return <button onClick={handleFetch}>Fetch</button>;
};

export const Home = () => {
  const [isLogoutPressed, setIsLoggoutPressed] = useState(false);
  const [isTrainingPressed, setIsTrainingPressed] = useState(false);

  const trainingStateValue = useAtomValue(trainingStateAtom);

  const logOut = useSetAtom(logOutAtom);
  const setTraningState = useSetAtom(trainingStateAtom);
  const setStartTraining = useSetAtom(startTrainingAtom);

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();
  usePageTitle(HOME_PAGE_TITLE);

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const trainingButtonCaption = isTrainingOn
    ? CURRENT_TRAINING_CAPTION
    : START_NEW_TRAINING_CAPTION;

  const handleIsTrainingPressed = () => {
    if (isTrainingOn) {
      redirectToTraining();
    } else {
      setIsTrainingPressed(true);
    }
  };
  const trainingConfirmAccepted = () => {
    setTraningState(TRAINING_ON);
    setStartTraining();

    setIsTrainingPressed(false);
    redirectToTraining();
  };
  const trainingConfirmDeclined = () => {
    setIsTrainingPressed(false);
  };
  const handleIsLogoutPressed = () => {
    setIsLoggoutPressed(true);
  };
  const logOutConfirmAccepted = () => {
    logOut();
    setIsLoggoutPressed(false);
  };
  const logOutConfirmDeclined = () => {
    setIsLoggoutPressed(false);
  };

  return (
    <>
      <Title tag="h1">Home</Title>
      <div className="buttonWrapper">
        <Button
          caption={trainingButtonCaption}
          handleFunction={handleIsTrainingPressed}
          classes="button primary"
        />
        <Button
          caption="See Summary"
          handleFunction={redirectToSummary}
          classes="button primary"
        />
        <Button
          caption="Log me out"
          handleFunction={handleIsLogoutPressed}
          classes="button primary"
        />
        <FetchButton />
      </div>
      {isLogoutPressed && (
        <ConfirmModal
          confirmMessage={LOGGING_CONFIRM_MESSAGE}
          confirmAcceptFunction={logOutConfirmAccepted}
          confirmDeclineFunction={logOutConfirmDeclined}
        />
      )}
      {isTrainingPressed && (
        <ConfirmModal
          confirmMessage={NEW_TRAINING_CONFIRM_MESSAGE}
          confirmAcceptFunction={trainingConfirmAccepted}
          confirmDeclineFunction={trainingConfirmDeclined}
        />
      )}
    </>
  );
};
