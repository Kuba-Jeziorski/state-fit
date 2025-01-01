import { useSetAtom } from "jotai";
import { ExerciseSet } from "../constants/types";
import { hasReps } from "../utils/has-reps";
import { hasWeight } from "../utils/has-weight";
import { Button } from "./the-button";
import { deleteSetAtom } from "../atoms/writeonly/delete-set-atom";
import { useState } from "react";
import { ConfirmModal } from "./confirm-modal";
import { hasDistance } from "../utils/has-distance";
import { hasTime } from "../utils/has-time";

type SingleSetProps = {
  exerciseSet: ExerciseSet;
};

export const SingleSet = ({ exerciseSet }: SingleSetProps) => {
  const [deleteSetModal, setDeleteSetModal] = useState(false);
  const currentSetObject = exerciseSet;

  const deleteSet = useSetAtom(deleteSetAtom);

  if (currentSetObject === undefined) {
    return null;
  }

  const currentSetId = exerciseSet.id;

  const handleDeleteSet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDeleteSetModal(true);
  };
  const deleteSetConfirmAccepted = () => {
    deleteSet(currentSetId);
  };
  const deleteSetConfirmDeclined = () => {
    setDeleteSetModal(false);
  };

  const hasRepsCheck = hasReps(currentSetObject);
  const hasWeightCheck = hasWeight(currentSetObject);
  const hasDistanceCheck = hasDistance(currentSetObject);
  const hasTimeCheck = hasTime(currentSetObject);

  return (
    <div className="set" data-set={currentSetObject.id}>
      <div className="setInputs">
        {hasRepsCheck && (
          <div className="setInput">
            <label>Reps</label>
            <input type="number" />
          </div>
        )}
        {hasWeightCheck && (
          <div className="setInput">
            <label>Weight</label>
            <input type="number" />
          </div>
        )}
        {hasDistanceCheck && (
          <div className="setInput">
            <label>Distance</label>
            <input type="number" />
          </div>
        )}
        {hasTimeCheck && (
          <div className="setInput">
            <label>Time</label>
            <input type="number" />
          </div>
        )}
      </div>
      <div className="buttonWrapper buttonSet">
        <Button
          caption="Delete set"
          classes="button primary"
          handleFunction={(event) => handleDeleteSet(event)}
        />
      </div>
      {deleteSetModal && (
        <ConfirmModal
          confirmAcceptFunction={deleteSetConfirmAccepted}
          confirmDeclineFunction={deleteSetConfirmDeclined}
          confirmMessage="Do you want to delete this set?"
        />
      )}
    </div>
  );
};
