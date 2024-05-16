import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/home/Home";
import DataGraph from "./pages/Data/DataGraph";
import PieChart from "./pages/Data/PieChart";
import Export from "./pages/Export/Export";
import Rapport from "./pages/Rapport/Rapport";
import Calendar from "./pages/Calendar/Calendar";
import About from "./pages/About/About";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<DataGraph />} />
      <Route path="/export" element={<Export />} />
      <Route path="/rapport" element={<Rapport />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/about" element={<About />} />
      <Route path="/piechart" element={<PieChart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
