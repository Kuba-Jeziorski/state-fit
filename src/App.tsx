import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// import { PENDING, IN_PROGRESS, FINISHED } from "./constants/constants";
import { AppState, StateFunction } from "./constants/types";

import { Opening } from "./components/Opening";
import { Home } from "./components/Home";
import { Summary } from "./components/Summary";

import "./index.css";

function App() {
  const [appState, setAppState] = useState<AppState>("pending");

  // const appIsPending = appState === PENDING;
  // const appIsInProgress = appState === IN_PROGRESS;
  // const appIsFinished = appState === FINISHED;

  const navigate = useNavigate();

  const handleAppState = (stateFunction: StateFunction, state: AppState) => {
    stateFunction(() => state);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          path="/open"
            element={
              <Opening
                navigate={navigate}
                applicationState={appState}
                onPush={() => handleAppState(setAppState, "in-progress")}
              />
            }
          />
          <Route
            path="/"
            element={
              
              <Home applicationState={appState} onPush={() => handleAppState(setAppState, "finished")} />
            }
          />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>

      {/* {appIsPending && (
        <Opening onPush={() => handleAppState(setAppState, "in-progress")} />
      )}
      {appIsInProgress && (
        <Home onPush={() => handleAppState(setAppState, "finished")} />
      )} */}
      {/* {appIsFinished && <Summary />} */}
    </>
  );
}

export default App;
