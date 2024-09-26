import { useState } from "react";

export const TrainingForm = () => {
  const [exercises, setExercises] = useState([{ id: 1, sets: 1 }]);

  const addAnotherExercise = () => {
    setExercises((prevExercises) => [
      ...prevExercises,
      { id: prevExercises.length + 1, sets: 1 },
    ]);
  };

  const addAnotherSet = (exerciseId: number) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, sets: exercise.sets + 1 }
          : exercise
      )
    );
  };

  console.log(exercises);

  return (
    <>
      <form>
        {exercises.map((exercise) => (
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
            key={exercise.id}
            data-wrap={exercise.id}
          >
            <label htmlFor={`exercises-${exercise.id}`}>
              Choose an exercise
            </label>
            <select
              style={{ marginBottom: "10px" }}
              name={`exercises-${exercise.id}`}
              id={`exercises-${exercise.id}`}
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

            {[...Array(exercise.sets)].map((_, index) => {
              const setNumber = index + 1;

              return (
                <div
                  style={{
                    border: "1px solid red",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  key={setNumber}
                  data-set={setNumber}
                >
                  <p>SET {setNumber}</p>
                  <label
                    htmlFor={`exercisename-${exercise.id}-set${setNumber}-weight`}
                  >
                    Weight
                  </label>
                  <input
                    type="number"
                    id={`exercisename-${exercise.id}-set${setNumber}-weight`}
                    name={`exercisename-${exercise.id}-set${setNumber}-weight`}
                  />
                  <label
                    htmlFor={`exercisename-${exercise.id}-set${setNumber}-reps`}
                  >
                    Reps
                  </label>
                  <input
                    type="number"
                    id={`exercisename-${exercise.id}-set${setNumber}-reps`}
                    name={`exercisename-${exercise.id}-set${setNumber}-reps`}
                  />
                </div>
              );
            })}

            <button type="button" onClick={() => addAnotherSet(exercise.id)}>
              ADD ANOTHER SET
            </button>
          </div>
        ))}

        <button type="button" onClick={addAnotherExercise}>
          ADD ANOTHER EXERCISE
        </button>
      </form>
    </>
  );
};
