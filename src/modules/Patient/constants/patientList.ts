import type { HeaderObject } from "@components/TableComponent/types";

export const PATIENT_HEADERS: HeaderObject[] = [
  { title: "ID", key: "id", align: "left" },
  { title: "Nombre", key: "name", align: "left" },
  { title: "Edad", key: "age", align: "center" },
  { title: "Correo", key: "email", align: "left" },
  { title: "Acciones", key: "actions", align: "center" },
];

export const mockPatients = [
  { id: 1, name: "Ana Torres", age: 34, email: "ana.torres@ejemplo.com" },
  { id: 2, name: "Carlos Soto", age: 58, email: "carlos.soto@ejemplo.com" },
  { id: 3, name: "Laura Pérez", age: 22, email: "laura.perez@ejemplo.com" },
  { id: 4, name: "Miguel Días", age: 71, email: "miguel.dias@ejemplo.com" },
  { id: 5, name: "Sofía Gómez", age: 45, email: "sofia.gomez@ejemplo.com" },
  { id: 6, name: "Javier Rivas", age: 19, email: "javier.rivas@ejemplo.com" },
  { id: 7, name: "Elena Vargas", age: 60, email: "elena.vargas@ejemplo.com" },
  {
    id: 8,
    name: "Ricardo Marín",
    age: 39,
    email: "ricardo.marin@ejemplo.com",
  },
  {
    id: 9,
    name: "Isabel Castro",
    age: 28,
    email: "isabel.castro@ejemplo.com",
  },
  { id: 10, name: "Pedro López", age: 53, email: "pedro.lopez@ejemplo.com" },
  // Agregamos más para la paginación
  {
    id: 11,
    name: "Natalia Cruz",
    age: 30,
    email: "natalia.cruz@ejemplo.com",
  },
  { id: 12, name: "Felipe Ruiz", age: 48, email: "felipe.ruiz@ejemplo.com" },
];
