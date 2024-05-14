import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";

export const Routes = createBrowserRouter([
  {
    path: "/restaurane/",
    element: <Home />,
  },
]);
