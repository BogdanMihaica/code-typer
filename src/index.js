// Assuming this is the entry point, like index.js or index.tsx
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./components/Landing/Landing";
import { Practice } from "./components/Practice/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/type",
    element: <Practice />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
