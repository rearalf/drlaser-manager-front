import type { HeaderObject } from "@components/TableComponent/types";

export const PATIENT_HEADERS: HeaderObject[] = [
  { title: "Nombre", key: "name", align: "left" },
  { title: "Edad", key: "age", align: "center" },
  { title: "Teléfono", key: "email", align: "center" },
  { title: "Acciones", key: "actions", align: "center" },
];

export const mockPatients = [
  { id: 1, fullName: "Ana Torres", age: 34, phone: "555-1234" },
  { id: 2, fullName: "Carlos Soto", age: 58, phone: "555-5678" },
  { id: 3, fullName: "Laura Pérez", age: 22, phone: "555-8765" },
  { id: 4, fullName: "Miguel Días", age: 71, phone: "555-4321" },
  { id: 5, fullName: "Sofía Gómez", age: 45, phone: "555-2468" },
  { id: 6, fullName: "Javier Rivas", age: 19, phone: "555-1357" },
  { id: 7, fullName: "Elena Vargas", age: 60, phone: "555-9876" },
  { id: 8, fullName: "Ricardo Marín", age: 39, phone: "555-1122" },
  { id: 9, fullName: "Isabel Castro", age: 28, phone: "555-3344" },
  { id: 10, fullName: "Pedro López", age: 53, phone: "555-5566" },
  { id: 11, fullName: "Natalia Cruz", age: 30, phone: "555-7788" },
  { id: 12, fullName: "Felipe Ruiz", age: 48, phone: "555-9900" },
];
