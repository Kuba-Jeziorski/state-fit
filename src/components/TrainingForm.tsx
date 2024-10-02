import { atom, useAtomValue } from "jotai";
import { currentTrainingIdAtom } from "../atoms/current-training-id-atom";
import { trainingsAtom } from "../atoms/trainings-atom";

const currentTrainingAtom = atom((get) => {
  const id = get(currentTrainingIdAtom);
  const trainings = get(trainingsAtom);
  if (id === null) {
    return null;
  }
  return trainings[id];
});

export const TrainingForm = () => {
  const currentTraining = useAtomValue(currentTrainingAtom);
  return (
    <>
      <form>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <label htmlFor={`exercises-1`}>Choose an exercise</label>
          <p>{currentTraining?.date}</p>
          <select
            style={{ marginBottom: "10px" }}
            name={`exercises-1`}
            id={`exercises-1`}
          >
            <option value="" defaultChecked disabled>
              Select exercise
            </option>
            <optgroup label="chest">
              <option value="chest1">Chest1</option>
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

          <div
            style={{
              border: "1px solid red",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>SET 1</p>
            <label>Weight</label>
            <input type="number" />
            <label>Reps</label>
            <input type="number" />
          </div>

          <button>ADD ANOTHER SET</button>
        </div>

        <button style={{ marginBottom: "10px" }}>ADD ANOTHER EXERCISE</button>
      </form>
    </>
  );
};
