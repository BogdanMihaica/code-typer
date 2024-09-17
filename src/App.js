/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Background from "./helpers/Background/Background";
import Landing from "./components/Landing/Landing";
import { Outlet, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
