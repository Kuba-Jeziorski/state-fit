import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import { Opening } from "./pages/Opening";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Training } from "./pages/Training";
import { NoPage } from "./pages/NoPage";
import { useAtomValue } from "jotai";
import {
  TOKEN_NOT_PROVIDED,
  TOKEN_PENDING,
  TOKEN_PROVIDED,
} from "./constants/constants";
import { tokenAtom } from "./atoms/readonly/token-atom";

type AuthGuardProps = {
  element: JSX.Element;
};

const AuthGuard = ({ element }: AuthGuardProps) => {
  const tokenValue = useAtomValue(tokenAtom);

  switch (tokenValue) {
    case TOKEN_PROVIDED:
      return element;
    case TOKEN_NOT_PROVIDED:
      return <Navigate to="/opening" replace />;
    case TOKEN_PENDING:
    default:
      return <p>Loading</p>;
  }
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthGuard element={<Home />} />,
    },
    {
      path: "/opening",
      element: <Opening />,
    },
    {
      path: "/training",
      element: <AuthGuard element={<Training />} />,
    },
    { path: "/summary", element: <AuthGuard element={<Summary />} /> },
    { path: "*", element: <NoPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
