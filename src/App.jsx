import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}>
        <Main />
      </RouterProvider>
    </div>
  );
}

export default App;
