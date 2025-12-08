/* eslint-disable no-console */
import { useState, useMemo, useEffect } from "react";
import {
  Container,
  Typography,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { LuEye, LuTrash2 } from "react-icons/lu";
import { mockPatients, PATIENT_HEADERS } from "../constants/patientList";
import TableComponent from "@components/TableComponent";

const PatientsTable = () => {
  // --- 2. Estados de la Paginación y Carga ---
  const [page, setPage] = useState(1); // Página base 1 (como requiere tu componente)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState<
    { id: number; name: string; age: number; email: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Simulación de carga de datos
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    const timer = setTimeout(() => {
      setData(mockPatients);
      setLoading(false);
    }, 1000); // Simular 1 segundo de carga

    return () => clearTimeout(timer);
  }, []);

  // --- 3. Lógica de Paginación del Cliente ---
  const paginatedData = useMemo(() => {
    if (loading || !data || data.length === 0) return [];

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, page, rowsPerPage, loading]);

  const totalDataCount = data.length;

  // --- Handlers de Acciones (Funciones de ejemplo) ---
  const handleView = (id: number) => console.log(`Ver paciente ${id}`);
  const handleEdit = (id: number) => console.log(`Editar paciente ${id}`);
  const handleDelete = (id: number) => console.log(`Eliminar paciente ${id}`);

  // --- 4. Renderizado del Cuerpo (Body) de la Tabla ---
  const tableBodyContent = (
    <TableBody>
      {paginatedData.map((patient) => (
        <TableRow key={patient.id} hover>
          {/* Mapeamos las celdas según las claves definidas en PATIENT_HEADERS (excepto 'actions') */}
          {PATIENT_HEADERS.map((header) => (
            <TableCell key={header.key} align={header.align || "left"}>
              {/* Lógica de renderizado por clave */}
              {header.key === "actions" ? (
                // --- Columna de Acciones Personalizada ---
                <>
                  <IconButton
                    size="small"
                    color="info"
                    onClick={() => handleView(patient.id)}
                    title="Ver"
                  >
                    <LuEye />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(patient.id)}
                    title="Editar"
                  >
                    <LuEye />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(patient.id)}
                    title="Eliminar"
                  >
                    <LuTrash2 />
                  </IconButton>
                </>
              ) : (
                // Mostrar el valor del paciente para las otras columnas
                patient[header.key as keyof typeof patient]
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );

  // --- 5. Handlers de Paginación para el TableComponent ---
  const handleSetPage = (newPage: number) => {
    // newPage viene de TablePaginationFooter (base 1)
    setPage(newPage);
  };

  const handleSetRowsPerPage = (size: number) => {
    // La lógica de TablePaginationFooter resetea la página a 1
    setRowsPerPage(size);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        👩‍⚕️ Lista de Pacientes (Demo)
      </Typography>

      <TableComponent
        // Requeridos
        headers={PATIENT_HEADERS}
        body={tableBodyContent}
        totalData={totalDataCount}
        ariaLabelTable="Tabla de pacientes del hospital"
        // Paginación y Handlers
        pagination={true}
        page={page}
        rowsPerPage={rowsPerPage}
        handleSetPage={handleSetPage}
        handleSetRowsPerPage={handleSetRowsPerPage}
        // Opcionales
        loading={loading}
        dense={false}
        maxHeight={500}
        emptyMessage="No hay pacientes registrados en el sistema."
      />
    </Container>
  );
};

export default PatientsTable;
