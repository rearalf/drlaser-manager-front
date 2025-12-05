import { createBrowserRouter } from "react-router";

import AuthLayout from "@layouts/AuthLayout";
import RootLayout from "@layouts/RootLayout";

import DashboardPage from "@modules/Dashboard";
import LoginPage from "@modules/Auth/Login";
import NotFoundPage from "@modules/NotFound";

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
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
