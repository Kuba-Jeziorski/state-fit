import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
// import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { ExerciseSets, SelectExercises } from "../constants/types";
import { hasWeight } from "../utils/hasWeight";
import { hasReps } from "../utils/hasReps";
import {
  ALL_CHEST_EXERCISES,
  DEFAULT_NUMERIC_INPUT_PLACEHOLDER_VALUE,
} from "../constants/constants";
import { useState } from "react";
import { exercisesAtom } from "../atoms/exercises-atom";

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
  const currentTrainingId = useAtomValue(currentTrainingIdAtom);
  const setTrainings = useSetAtom(trainingsAtom);
  const [exercises, setExercises] = useAtom(exercisesAtom);

  const [curExerciseId, setCurExerciseId] = useState("");

  const currentTrainingIdFromLocalStorage =
    localStorage.getItem("currentTraining");

  const isExercisesEmpty = Object.keys(exercises).length === 0;

  const addExercise = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newId = Date.now().toString();
    setCurExerciseId(newId);

    const newExercise = {
      id: newId,
      exerciseTypeId: `a-${newId}`,
      exerciseSetIds: [],
    };

    setExercises((prevExercises) => {
      const newExercises = {
        ...prevExercises,
        [id]: newExercise,
      };
      return newExercises;
    });

    setTrainings((trainings) => {
      if (currentTrainingId === null) {
        throw new Error("current triannig is null!");
      }
      const currentTraining = trainings[currentTrainingId];

      const newTraining = {
        ...trainings,
        [currentTrainingId]: {
          ...currentTraining,
          exerciseIds: [...currentTraining.exerciseIds, newId],
        },
      };

      return newTraining;
    });
  };

  return (
    <>
      <h2>Current training id: {currentTrainingIdFromLocalStorage}</h2>
      {exercises &&
        Object.keys(exercises).map((key) => {
          console.log(key);
          return (
            <SingleExercise
              key={key}
              curExerciseId={curExerciseId}
              thisExerciseId={key}
            />
          );
        })}
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

type SingleExericseProp = {
  curExerciseId: string;
  thisExerciseId: string;
};

const SingleExercise = ({
  curExerciseId,
  thisExerciseId,
}: SingleExericseProp) => {
  const [sets, setSets] = useState<ExerciseSets>({});
  const [selectedExercise, setSelectedExercise] = useState<SelectExercises>(
    "Incline dumbbell press"
  );
  const setExercises = useSetAtom(exercisesAtom);

  const isSetsEmpty = Object.keys(sets).length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectExercises;
    setSelectedExercise(value);
  };

  console.log(curExerciseId);

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

    // Now update the exercise to include the new set ID
    setExercises((prevExercises) => {
      const currentExercise = prevExercises[thisExerciseId]; // Find the current exercise

      const updatedExercise = {
        ...currentExercise,
        exerciseSetIds: [...currentExercise.exerciseSetIds, newSetId], // Add the new set ID to exerciseSetIds
      };

      return {
        ...prevExercises,
        [thisExerciseId]: updatedExercise, // Update the specific exercise
      };
    });
  };

  return (
    <div className="training">
      <p>
        Exercise ID: <strong>{thisExerciseId}</strong>
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

      <button onClick={addSet}>
        {isSetsEmpty ? "ADD FIRST SET" : "ADD ANOTHER SET"}
      </button>
    </div>
  );
};

export const TrainingForm = () => {
  return (
    <>
      <form>
        <AllExercises />
      </form>
    </>
  );
};
