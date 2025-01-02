import { useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";
import {
  FIRST_SET_CAPTION,
  ANOTHER_SET_CAPTION,
  DUMBBELL_PRESS_FLAT,
} from "../constants/constants";
import { SelectChestExercises } from "../constants/types";
import { SingleSet } from "./single-set";
import { Button } from "./the-button";
import { currentExerciseSetsAtomFactory } from "../atoms/factories/current-exercise-sets-atom-factory";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { SelectOptions } from "./select-options";
import { AnyExerciseType } from "../constants/exercise-types";
import { getExerciseProperties } from "../utils/get-exercise-properties";

type SingleExericseProp = {
  exerciseId: string;
};

export const SingleExercise = ({ exerciseId }: SingleExericseProp) => {
  const [selectedExercise, setSelectedExercise] =
    useState<AnyExerciseType>(DUMBBELL_PRESS_FLAT);

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
          ...getExerciseProperties(selectedExercise),
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
    <div className="trainingExercise" data-exercise={exerciseId}>
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
