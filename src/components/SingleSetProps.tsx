import { ExerciseSet } from "../constants/types";
import { hasReps } from "../utils/hasReps";
import { hasWeight } from "../utils/hasWeight";

type SingleSetProps = {
  exerciseSet: ExerciseSet;
};

export const SingleSet = ({ exerciseSet }: SingleSetProps) => {
  const currentSetObject = exerciseSet;

  if (currentSetObject === undefined) {
    return null;
  }

  const hasRepsCheck = hasReps(currentSetObject);
  const hasWeightCheck = hasWeight(currentSetObject);

  const currentSetRepsPlaceholder = hasRepsCheck
    ? currentSetObject.reps.toString()
    : "";
  const currentSetWeightPlaceholder = hasWeightCheck
    ? currentSetObject.weight.toString()
    : "";

  return (
    <div className="set">
      <p>SET {currentSetObject.id}</p>
      {hasRepsCheck && (
        <>
          <label>Weight</label>
          <input type="number" placeholder={currentSetRepsPlaceholder} />
        </>
      )}
      {hasWeightCheck && (
        <>
          <label>Reps</label>
          <input type="number" placeholder={currentSetWeightPlaceholder} />
        </>
      )}
    </div>
  );
};
