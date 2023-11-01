import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <Main />
        <Toaster />
      </RouterProvider>
    </>
  );
}

export default App;
