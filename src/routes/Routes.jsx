import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import Portfolios from "../pages/Portfolios";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolios />,
      },
    ],
  },
]);

export default Routes;
