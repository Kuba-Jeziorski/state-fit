import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";
import {
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
  ALL_CHEST_EXERCISES,
  FIRST_SET_CAPTION,
  ANOTHER_SET_CAPTION,
} from "../constants/constants";
import { SelectExercises } from "../constants/types";
import { SingleSet } from "./SingleSetProps";
import { Button } from "./Button";
import { currentExerciseSetsAtom } from "../atoms/readonly/current-exercise-sets-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";

type SingleExericseProp = {
  exerciseId: string;
};

export const SingleExercise = ({ exerciseId }: SingleExericseProp) => {
  console.log(`single`);
  const currentExerciseAtom = useMemo(
    () => currentExerciseSetsAtom(exerciseId),
    [exerciseId]
  );

  const [sets, setSets] = useAtom(exerciseSetsAtom); // filter with current exercise id
  const currentExercise = useAtomValue(currentExerciseAtom);
  const setExercises = useSetAtom(exercisesAtom);

  const currentExerciseSets = currentExercise.exerciseSetIds;

  const [selectedExercise, setSelectedExercise] = useState<SelectExercises>(
    "Incline dumbbell press"
  );

  const isSetsEmpty = currentExerciseSets.length === 0;

  const buttonCaption = isSetsEmpty ? FIRST_SET_CAPTION : ANOTHER_SET_CAPTION;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectExercises;
    setSelectedExercise(value);
  };

  const addSet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newSetId = crypto.randomUUID();

    setSets((prevSets) => {
      const newSets = {
        ...prevSets,
        [newSetId]: {
          id: newSetId,
          type: selectedExercise,
          weight: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
          reps: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
        },
      };

      return newSets;
    });

    setExercises((prevExercises) => {
      const exercise = prevExercises[exerciseId];

      const updatedExercise = {
        ...exercise,
        exerciseSetIds: [...exercise.exerciseSetIds, newSetId],
      };

      return {
        ...prevExercises,
        [exerciseId]: updatedExercise,
      };
    });
  };

  return (
    <div className="training">
      <p>
        Exercise ID: <strong>{exerciseId}</strong>
      </p>
      <label>Choose an exercise</label>
      <select
        value={selectedExercise}
        onChange={handleChange}
        disabled={Object.keys(sets).length !== 0}
      >
        <optgroup label="Chest">
          {ALL_CHEST_EXERCISES.map((exercise) => {
            return <option key={exercise}>{exercise}</option>;
          })}
        </optgroup>
      </select>
      {sets &&
        Object.keys(sets).map((key) => {
          return <SingleSet key={key} currentSet={key} sets={sets} id={key} />;
        })}
      <Button
        caption={buttonCaption}
        handleFunction={addSet}
        classes="button primary"
      />
    </div>
  );
};
