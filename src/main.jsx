import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/css/responsive.css";
import "./index.css";
import Routes from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes}>
    <React.StrictMode></React.StrictMode>
  </RouterProvider>
);
