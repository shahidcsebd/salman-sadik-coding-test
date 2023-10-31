import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AiAssistWriter from "../Pages/AiAssistWriter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AiAssistWriter />,
      },
    ],
  },
]);

export default routes;
