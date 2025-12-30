import { createBrowserRouter } from "react-router";

import AuthLayout from "@layouts/AuthLayout";
import RootLayout from "@layouts/RootLayout";

import DashboardPage from "@modules/Dashboard";
import NotFoundPage from "@modules/NotFound";
import LoginPage from "@modules/Auth/Login";

import AppointmentRoutes from "@modules/Appointment/Appointment.route";
import PatientRoutes from "@modules/Patient/Patient.route";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    handle: { crumb: "Inicio" },
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...PatientRoutes,
      ...AppointmentRoutes,
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
    handle: { crumb: "Página no encontrada" },
  },
]);

export default router;

/* 
{
    path: 'pacientes',
    children: [
        // 1. READ (Lista) -> /pacientes
        {
        index: true,
        element: <PatientList />,
        },
        // 2. CREATE (Crear) -> /pacientes/crear
        {
        path: 'crear',
        element: <PatientCreate />,
        },
        // Rutas Anidadas para un paciente específico
        {
        path: ':patientId', // :patientId es el ID del paciente
        children: [
            // 3. READ (Detalle) -> /pacientes/:patientId
            {
            index: true, 
            element: <PatientDetail />,
            },
            // 4. UPDATE (Editar) -> /pacientes/:patientId/editar
            {
            path: 'editar',
            element: <PatientEdit />, 
            },
            // Rutas para módulos específicos del paciente (Historial, Odontograma)
            {
            path: 'odontograma',
            element: <OdontogramView />,
            },
            // Puedes añadir: /pacientes/:patientId/citas, /pacientes/:patientId/historial-clinico
        ],
        },
    ],
    }
*/
