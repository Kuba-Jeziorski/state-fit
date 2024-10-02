import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          appState={appState}
          setAppState={setAppState}
          trainingState={trainingState}
          setTrainingState={setTrainingState}
        />
      ),
    },
    {
      path: "/opening",
      element: <Opening appState={appState} setAppState={setAppState} />,
    },
    {
      path: "/training",
      element: (
        <Training
          appState={appState}
          trainingState={trainingState}
          setTrainingState={setTrainingState}
        />
      ),
    },
    { path: "/summary", element: <Summary /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
