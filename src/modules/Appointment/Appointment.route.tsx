import type { RouteObject } from "react-router";
import AppointmentList from "./pages/AppointmentList";

const AppointmentRoutes: RouteObject[] = [
  {
    path: "citas",
    handle: { crumb: "Citas" },
    children: [
      {
        index: true,
        element: <AppointmentList />,
      },
    ],
  },
];

export default AppointmentRoutes;
