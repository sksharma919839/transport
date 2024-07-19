import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Vehicle from "./Page/Vehicle";
import Service from "./Page/Service";
import Aboutus from "./Page/Aboutus";
import Contact from "./Page/Contact";
import Shorttruck from "./Page/Shorttruck";
import Mainloadtruck from "./Page/Mainloadtruck";
import Maintruck from "./Page/Maintruck";
import Bigtruck from "./Page/Bigtruck";
import Vandelevery from "./Page/Vandelevery";
import Veteran from "./Page/Veteran";
import Bigloadtruck from "./Page/Bigloadtruck";
import Bustransport from "./Page/Bustransport";
import Storagewith from "./Page/Storagewith";
import Transport from "./Page/Transport";
import Logistic from "./Page/Logistic";
import Towservice from "./Page/Towservice";
import Passenger from "./Page/Passenger";
import Vehicleser from "./Page/Vehicleser";
import Storage from "./Page/Storage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/vehicle",
      element: <Vehicle />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/about",
      element: <Aboutus />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "shorttruck",
      element: <Shorttruck />,
    },
    {
      path: "mainloadtruck",
      element: <Mainloadtruck />,
    },
    {
      path: "maintruck",
      element: <Maintruck />,
    },
    {
      path: "bigtruck",
      element: <Bigtruck />,
    },
    {
      path: "vandelevery",
      element: <Vandelevery />,
    },
    {
      path: "veteran",
      element: <Veteran />,
    },
    {
      path: "bigloadtruck",
      element: <Bigloadtruck />,
    },
    {
      path: "storagewith",
      element: <Storagewith />,
    },
    {
      path: "bustransport",
      element: <Bustransport />,
    },
    {
      path: "transport",
      element: <Transport />,
    },
    {
      path: "logistic",
      element: <Logistic />,
    },
    {
      path: "towservice",
      element: <Towservice />,
    },
    {
      path: "passenger",
      element: <Passenger />,
    },
    {
      path: "vehicleser",
      element: <Vehicleser />,
    },
    {
      path: "storage",
      element: <Storage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
