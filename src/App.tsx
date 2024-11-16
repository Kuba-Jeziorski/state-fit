import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Opening } from "./pages/Opening";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Training } from "./pages/Training";
import { NoPage } from "./pages/NoPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/opening",
      element: <Opening />,
    },
    {
      path: "/training",
      element: <Training />,
    },
    { path: "/summary", element: <Summary /> },
    { path: "*", element: <NoPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
