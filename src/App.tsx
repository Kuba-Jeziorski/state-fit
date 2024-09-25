import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppState, StateFunction } from "./constants/types";

import { Opening } from "./components/Opening";
import { Home } from "./components/Home";
import { Summary } from "./components/Summary";

import "./index.css";
import { NavigationPlaceholder } from "./components/NavigationPlaceholder";

function App() {
  const [appState, setAppState] = useState<AppState>("pending");

  const handleAppState = (stateFunction: StateFunction, state: AppState) => {
    stateFunction(() => state);
  };

  return (
    <>
      <BrowserRouter>
      <NavigationPlaceholder/>
        <Routes>
          <Route
          path="/open"
            element={
              <Opening
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
