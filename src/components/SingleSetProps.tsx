import { ExerciseSets } from "../constants/types";
import { hasReps } from "../utils/hasReps";
import { hasWeight } from "../utils/hasWeight";

type SingleSetProps = {
  currentSet: string;
  sets: ExerciseSets;
};

export const SingleSet = ({ currentSet, sets }: SingleSetProps) => {
  const currentSetObject = sets[currentSet];
  const currentSetIndex = currentSetObject.id.split("-")[0];

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
      <p>SET {currentSetIndex}</p>
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
