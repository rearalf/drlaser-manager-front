import type { RouteObject } from "react-router";

import PatientList from "./pages/PatientList";
import NewPatient from "./pages/NewPatient";

const PatientRoutes: RouteObject[] = [
  {
    path: "pacientes",
    handle: { crumb: "Pacientes" },
    children: [
      {
        index: true,
        element: <PatientList />,
      },
      {
        path: "nuevo-paciente",
        element: <NewPatient />,
        handle: { crumb: "Nuevo paciente" },
      },
    ],
  },
];

export default PatientRoutes;
