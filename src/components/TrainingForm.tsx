import { ReactNode } from "react";
import { AllExercises } from "./AllExercises";
import axios from "axios";

const testTraining = {
  id: 1,
  exercise: "Test Exercise",
  numberOfRows: 5,
};

const testFetch = async () => {
  const response = await axios.post(
    "http://localhost:3000/trainings",
    testTraining
  );
  console.log("Added data", response.data);
};

type TrainingFormWrapperProps = {
  children: ReactNode;
};

const TrainingFormWrapper = ({ children }: TrainingFormWrapperProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Submitted`);

    testFetch();
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <div className="buttonWrapper">
        <button className="button primary" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export const TrainingForm = () => {
  return (
    <TrainingFormWrapper>
      <AllExercises />
    </TrainingFormWrapper>
  );
};
