import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
