import type { RouteObject } from "react-router";
import PatientList from "./pages/PatientList";

const PatientRoutes: RouteObject[] = [
  {
    path: "pacientes",
    children: [
      {
        index: true,
        element: <PatientList />,
      },
    ],
  },
];

export default PatientRoutes;
