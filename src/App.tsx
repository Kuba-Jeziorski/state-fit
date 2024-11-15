import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { AppState, TrainingState } from "./constants/types";
import { Opening } from "./pages/Opening";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Training } from "./pages/Training";
import { NoPage } from "./pages/NoPage";
import { useAtomValue } from "jotai";
import { appStateAtom } from "./atoms/app-state-atom";
import { trainingStateAtom } from "./atoms/training-state-atom";

function App() {
  const appStateValue = useAtomValue(appStateAtom);
  const trainingStateValue = useAtomValue(trainingStateAtom);

  const [appState, setAppState] = useState<AppState>(appStateValue);
  const [trainingState, setTrainingState] =
    useState<TrainingState>(trainingStateValue);

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
    { path: "*", element: <NoPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
