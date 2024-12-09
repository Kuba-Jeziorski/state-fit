import {
  CURRENT_TRAINING_CAPTION,
  HOME_ACTIVE_BUTTON_LOGOUT,
  HOME_ACTIVE_BUTTON_NULL,
  HOME_ACTIVE_BUTTON_TRAINING,
  HOME_PAGE_TITLE,
  START_NEW_TRAINING_CAPTION,
  TRAINING_ON,
} from "../constants/constants";

import { Title } from "../components/Title";
import { useState } from "react";
import { usePageTitle } from "../utils/usePageTitle";
import { useRedirectToSummary } from "../utils/useRedirectToSummary";
import { useRedirectToTraining } from "../utils/useRedirectToTraining";
import { Button } from "../components/Button";
import { useAtomValue } from "jotai";
import { trainingStateAtom } from "../atoms/training-state-atom";

import axios from "axios";
import { HomeConfirmModal } from "../components/HomeConfirmModal";
import { ActiveHomeButton } from "../constants/types";

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
  const [activeButton, setActiveButton] = useState<ActiveHomeButton>(null);

  const trainingStateValue = useAtomValue(trainingStateAtom);

  const redirectToTraining = useRedirectToTraining();
  const redirectToSummary = useRedirectToSummary();
  usePageTitle(HOME_PAGE_TITLE);

  const isTrainingOn = trainingStateValue === TRAINING_ON;

  const trainingButtonCaption = isTrainingOn
    ? CURRENT_TRAINING_CAPTION
    : START_NEW_TRAINING_CAPTION;

  const handleIsTrainingPressed = () => {
    if (isTrainingOn) {
      setActiveButton(HOME_ACTIVE_BUTTON_NULL);
      redirectToTraining();
    } else {
      setActiveButton(HOME_ACTIVE_BUTTON_TRAINING);
    }
  };
  const handleIsLogoutPressed = () => {
    setActiveButton(HOME_ACTIVE_BUTTON_LOGOUT);
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
      <HomeConfirmModal
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </>
  );
};
