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
import { TOKEN_PROVIDED } from "./constants/constants";
import { tokenAtom } from "./atoms/readonly/token-atop";

type AuthGuardProps = {
  element: JSX.Element;
};

const AuthGuard = ({ element }: AuthGuardProps) => {
  const tokenValue = useAtomValue(tokenAtom);
  const isLoggedIn = tokenValue === TOKEN_PROVIDED;

  return isLoggedIn ? element : <Navigate to="/opening" replace />;
};

const App = () => {
  const tokenValue = useAtomValue(tokenAtom);
  const isLoggedIn = tokenValue === TOKEN_PROVIDED;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthGuard element={<Home />} />,
    },
    {
      path: "/opening",
      element: isLoggedIn ? <Navigate to="/" replace /> : <Opening />,
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
