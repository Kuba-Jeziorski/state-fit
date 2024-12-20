import { useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";
import {
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
  FIRST_SET_CAPTION,
  ANOTHER_SET_CAPTION,
} from "../constants/constants";
import { SelectChestExercises } from "../constants/types";
import { SingleSet } from "./single-set";
import { Button } from "./the-button";
import { currentExerciseSetsAtomFactory } from "../atoms/factories/current-exercise-sets-atom-factory";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { SelectOptions } from "./select-options";

type SingleExericseProp = {
  exerciseId: string;
};

export const SingleExercise = ({ exerciseId }: SingleExericseProp) => {
  const [selectedExercise, setSelectedExercise] =
    useState<SelectChestExercises>("INCLINE DUMBBELL PRESS");

  const currentExerciseSetsAtom = useMemo(
    () => currentExerciseSetsAtomFactory(exerciseId),
    [exerciseId]
  );
  // make custom hook useCurrentExercise

  const setSets = useSetAtom(exerciseSetsAtom);
  const setExercises = useSetAtom(exercisesAtom);

  const exerciseSets = useAtomValue(currentExerciseSetsAtom);

  const isSetsEmpty = exerciseSets.length === 0;

  const buttonCaption = isSetsEmpty ? FIRST_SET_CAPTION : ANOTHER_SET_CAPTION;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectChestExercises;
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
    // exercise-sets-atom

    setExercises((prevExercises) => {
      const exercise = prevExercises[exerciseId];

      if (!exercise) {
        console.error(`Exercise with ID ${exerciseId} not found.`);
        return prevExercises;
      }

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
        disabled={exerciseSets.length !== 0}
      >
        <SelectOptions />
      </select>
      {exerciseSets.map((exerciseSet) => {
        return <SingleSet key={exerciseSet.id} exerciseSet={exerciseSet} />;
      })}
      <Button
        caption={buttonCaption}
        handleFunction={addSet}
        classes="button primary"
      />
    </div>
  );
};
