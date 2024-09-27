import {
  AppStateValue,
  TrainingStateValueWithUpdater,
} from "../constants/types";
import { useRedirectIfLoggedOut } from "../utils/useRedirectIfLoggedOut";
// import { useRedirectIfTrainingOff } from "../utils/useRedirectIfTrainingOff";
import { TRAINING_OFF, TRAINING_ON } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { TrainingForm } from "../components/TrainingForm";
import { useEffect } from "react";

type TrainingProps = AppStateValue & TrainingStateValueWithUpdater;

export const Training = ({
  appState,
  trainingState,
  setTrainingState,
}: TrainingProps) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToSummary = () => {
    navigate('/summary');
  }

  const finishTraining = () => {
    setTrainingState(TRAINING_OFF);
    localStorage.setItem("trainingState", TRAINING_OFF);
    redirectToSummary();
  };

  useEffect(()=>{
    if(trainingState === TRAINING_OFF) {

    if (confirm(`Do you want to start new training?`)) {
      setTrainingState(TRAINING_ON);
      localStorage.setItem("trainingState", TRAINING_ON);
    } else {
      redirectToHome();
    }
  }

  },[trainingState, setTrainingState])

  

  useRedirectIfLoggedOut(appState);

  return (
    <>
      <button onClick={redirectToHome}>HOME</button>
      <Title tag="h1">New training</Title>
      <TrainingForm />
      <button onClick={finishTraining}>Finish training</button>
    </>
  );
};
