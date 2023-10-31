import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <Main />
      </RouterProvider>
    </>
  );
}

export default App;
