import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { AppState, TrainingState } from "./constants/types";
import { Opening } from "./pages/Opening";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Training } from "./pages/Training";

function App() {
  const [appState, setAppState] = useState<AppState>(() => {
    return (localStorage.getItem("appState") as AppState) || "logged-out";
  });

  const [trainingState, setTrainingState] = useState<TrainingState>(() => {
    return (
      (localStorage.getItem("trainingState") as TrainingState) || "training-off"
    );
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                appState={appState}
                setAppState={setAppState}
                trainingState={trainingState}
                setTrainingState={setTrainingState}
              />
            }
          />
          <Route
            path="/opening"
            element={<Opening appState={appState} setAppState={setAppState} />}
          />
          <Route path="/summary" element={<Summary />} />
          <Route
            path="/training"
            element={
              <Training
                appState={appState}
                trainingState={trainingState}
                setTrainingState={setTrainingState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
