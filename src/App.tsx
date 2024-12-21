import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import { Opening } from "./pages/the-opening";
import { Home } from "./pages/the-home";
import { Summary } from "./pages/the-summary";
import { Training } from "./pages/the-training";
import { NoPage } from "./pages/no-page";
import { useAtomValue } from "jotai";
import {
  TOKEN_NOT_PROVIDED,
  TOKEN_PENDING,
  TOKEN_PROVIDED,
} from "./constants/constants";
import { tokenAtom } from "./atoms/token-atom";
import { DummyTokenFetch } from "./utils/dummy-token-fetch";
import { Footer } from "./components/the-footer";

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
      return <DummyTokenFetch />;
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

  return (
    <>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
};

export default App;
