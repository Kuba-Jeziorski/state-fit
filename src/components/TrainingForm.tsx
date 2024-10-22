import { atom, useAtom, useAtomValue } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";
import { exerciseSetsAtom } from "../atoms/exercise-sets-atom";
import { exercisesAtom } from "../atoms/exercises-atom";

// single training
const currentTrainingAtom = atom((get) => {
  const id = get(currentTrainingIdAtom);
  const trainings = get(trainingsAtom);
  if (id === null) {
    return null;
  }
  return trainings[id];
});

// all exercises of single training day
const currentExercisesAtom = atom((get) => {
  const id = crypto.randomUUID();
  const exercises = get(exercisesAtom);
  if (id === null) {
    return null;
  }
  return exercises[id];
});

// single exercise sets
const currentExerciseSetAtom = atom((get) => {
  const id = crypto.randomUUID();
  const sets = get(exerciseSetsAtom);
  if (id === null) {
    return null;
  }
  return sets[id];
});

const SingleSet = () => {
  return (
    <div className="set">
      <p>SET 1</p>
      <label>Weight</label>
      <input type="number" />
      <label>Reps</label>
      <input type="number" />
    </div>
  );
};

const SingleExercise = () => {
  const [sets, setSets] = useAtom(exerciseSetsAtom);

  // const addNewSet = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const random = Math.ceil(Math.random() * 10);
  //   setSets((sets) => {
  //     return {
  //       ...sets,
  //       [`${random}-${random}`]: {
  //         id: `${random}`,
  //         type: "chest",
  //         weight: 0,
  //         reps: 0,
  //       },
  //     };
  //   });
  //   console.log(sets);
  // };

  return (
    <div className="training">
      <label>Choose an exercise</label>
      <select id={`exercises-1`}>
        <option value="" defaultChecked disabled>
          Select exercise
        </option>
        <optgroup label="chest">
          <option value="Dumbbells flat bench press">Chest1</option>
          <option value="chest2">Chest2</option>
          <option value="chest3">Chest3</option>
        </optgroup>
        <optgroup label="back">
          <option value="back1">Back1</option>
          <option value="back2">Back2</option>
          <option value="back3">Back3</option>
        </optgroup>
        <optgroup label="legs">
          <option value="legs1">Legs1</option>
          <option value="legs2">Legs2</option>
          <option value="legs3">Legs3</option>
        </optgroup>
      </select>
      {sets && Object.keys(sets).map((key) => <p>{key}</p>)}
      <SingleSet />

      <button onClick={addNewSet}>ADD ANOTHER SET</button>
    </div>
  );
};

export const TrainingForm = () => {
  const currentTraining = useAtomValue(currentTrainingAtom);
  console.log(currentTraining);
  const currentExercise = useAtomValue(currentExercisesAtom);
  console.log(currentExercise);
  const currentExerciseSet = useAtomValue(currentExerciseSetAtom);
  console.log(currentExerciseSet);

  return (
    <>
      <form>
        <SingleExercise />
        <button style={{ marginBottom: "10px" }}>ADD ANOTHER EXERCISE</button>
      </form>
    </>
  );
};
