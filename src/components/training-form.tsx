import { ReactNode } from "react";
import { AllExercises } from "./all-exercises";

type TrainingFormWrapperProps = {
  children: ReactNode;
};

const TrainingFormWrapper = ({ children }: TrainingFormWrapperProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Submitted`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <div className="buttonWrapper">
        <button className="button primary" type="submit">
          SUBMIT (no function)
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
