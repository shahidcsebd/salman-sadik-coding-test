import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AiAssistWriter from "../Pages/AiAssistWriter";
import OutlineEditor from "../Pages/OutlineEditor";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AiAssistWriter />,
      },
      {
        path: "/outline",
        element: <OutlineEditor />,
      },
    ],
  },
]);

export default routes;
