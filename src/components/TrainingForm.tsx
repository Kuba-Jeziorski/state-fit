import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { ExerciseSets, SelectExercises } from "../constants/types";
import { hasWeight } from "../utils/hasWeight";
import { hasReps } from "../utils/hasReps";
import {
  ALL_CHEST_EXERCISES,
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
} from "../constants/constants";
import { useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";

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
  localStorage.setItem("currentTraining", id);
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

const AllExercises = () => {
  const [exercises, setExercises] = useAtom(exercisesAtom);
  const setTrainings = useSetAtom(trainingsAtom);
  const currentTrainingId = useAtomValue(currentTrainingIdAtom);

  const isExercisesEmpty = Object.keys(exercises).length === 0;
  console.log(exercises);

  const addExercise = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(exerciseSetsAtom);

    const id = crypto.randomUUID();

    setExercises((exercises) => {
      const newId = Object.keys(exercises).length + 1;

      const newExercises = {
        ...exercises,
        [id]: {
          id: `${newId}-${getFormatedDate()}`,
          exerciseTypeId: `a-${newId}`,
          exerciseSetIds: [],
        },
      };
      setTrainings((trainings) => {
        if (currentTrainingId === null) {
          throw new Error("current triannig is is null!");
        }
        const currentTraining = trainings[currentTrainingId];
        return {
          ...trainings,
          [currentTrainingId]: {
            ...currentTraining,
            exerciseIds: [...currentTraining.exerciseIds, newExercises[id].id],
          },
        };
      });
      return newExercises;
    });
  };

  return (
    <>
      <button onClick={addExercise}>
        {isExercisesEmpty ? (
          <p>Add first exercise</p>
        ) : (
          <p>Add another exercise</p>
        )}
      </button>
    </>
  );
};

const SingleExercise = () => {
  const [sets, setSets] = useAtom(exerciseSetsAtom);
  const [selectedExercise, setSelectedExercise] = useState<SelectExercises>(
    "Incline dumbbell press"
  );

  const isSetsEmpty = Object.keys(sets).length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectExercises;
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
        {isSetsEmpty ? "ADD FIRST SET" : "ADD ANOTHER SET"}
      </button>
    </div>
  );
};

export const TrainingForm = () => {
  const currentTraining = useAtomValue(currentTrainingAtom);
  const currentTrainingId = localStorage.getItem("currentTraining");
  console.log(currentTraining);
  return (
    <>
      <p>{currentTrainingId}</p>
      <form>
        <AllExercises />
        <p>SingleExercise below</p>
        <SingleExercise />
      </form>
    </>
  );
};
