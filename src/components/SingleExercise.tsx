import { useSetAtom } from "jotai";
import { useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";
import {
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
  ALL_CHEST_EXERCISES,
  FIRST_SET_CAPTION,
  ANOTHER_SET_CAPTION,
} from "../constants/constants";
import { ExerciseSets, SelectExercises } from "../constants/types";
import { SingleSet } from "./SingleSetProps";
import { Button } from "./Button";

type SingleExericseProp = {
  exerciseId: string;
};

export const SingleExercise = ({ exerciseId }: SingleExericseProp) => {
  const [sets, setSets] = useState<ExerciseSets>({});
  const [selectedExercise, setSelectedExercise] = useState<SelectExercises>(
    "Incline dumbbell press"
  );
  const setExercises = useSetAtom(exercisesAtom);

  const isSetsEmpty = Object.keys(sets).length === 0;

  const buttonCaption = isSetsEmpty ? FIRST_SET_CAPTION : ANOTHER_SET_CAPTION;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectExercises;
    setSelectedExercise(value);
  };

  const addSet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newSetId = crypto.randomUUID(); // Generate a new ID for the set

    const newId = Date.now().toString(); // Generate an ID for the set object
    setSets((prevSets) => {
      const newSets = {
        ...prevSets,
        [newSetId]: {
          id: newId,
          type: selectedExercise,
          weight: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
          reps: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
        },
      };
      return newSets;
    });

    // Update the exercise to include the new set ID
    setExercises((prevExercises) => {
      const exercise = prevExercises[exerciseId]; // Find the current exercise

      const updatedExercise = {
        ...exercise,
        exerciseSetIds: [...exercise.exerciseSetIds, newSetId], // Add the new set ID to exerciseSetIds
      };

      return {
        ...prevExercises,
        [exerciseId]: updatedExercise, // Update the specific exercise
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
          return <SingleSet key={key} currentSet={key} sets={sets} />;
        })}
      <Button
        caption={buttonCaption}
        handleFunction={addSet}
        classes="button primary"
      />
    </div>
  );
};
