import { atom, useAtom, useAtomValue } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { ExerciseSets, PossibleSelectOptions } from "../constants/types";
import { hasWeight } from "../utils/hasWeight";
import { hasReps } from "../utils/hasReps";
import {
  ALL_CHEST_EXERCISES,
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
} from "../constants/constants";
import { useState } from "react";
// import { exercisesAtom } from "../atoms/exercises-atom";

const getFormatedDate = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  return `${currentDay}_${currentMonth}_${currentYear}`;
};

// single training
const currentTrainingAtom = atom((get) => {
  const id = get(currentTrainingIdAtom);
  const trainings = get(trainingsAtom);
  if (id === null) {
    return null;
  }
  return trainings[id];
});

type SingleSetProps = {
  currentSet: string;
  sets: ExerciseSets;
};

const SingleSet = ({ currentSet, sets }: SingleSetProps) => {
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

const SingleExercise = () => {
  const [sets, setSets] = useAtom(exerciseSetsAtom);
  const [selectedExercise, setSelectedExercise] =
    useState<PossibleSelectOptions>("Incline dumbbell press");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as PossibleSelectOptions;
    setSelectedExercise(value);
  };

  const addSet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    setSets((sets) => {
      const newId = Object.keys(sets).length + 1;

      const newSets = {
        ...sets,
        [id]: {
          id: `${newId}-${getFormatedDate()}`,
          type: selectedExercise,
          weight: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
          reps: DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
        },
      };
      console.log(newSets);
      return newSets;
    });
  };

  return (
    <div className="training">
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

      <button onClick={addSet}>
        {Object.keys(sets).length === 0 ? "ADD FIRST SET" : "ADD ANOTHER SET"}
      </button>
    </div>
  );
};

export const TrainingForm = () => {
  const currentTraining = useAtomValue(currentTrainingAtom);
  console.log(currentTraining ?? "not provided");

  return (
    <>
      <form>
        <SingleExercise />
        <button style={{ marginBottom: "10px" }}>ADD ANOTHER EXERCISE</button>
      </form>
    </>
  );
};
