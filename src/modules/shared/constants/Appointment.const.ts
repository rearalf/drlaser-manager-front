import type { AppointmentStatusType } from "@type/Appointment.types";

export const AppointmentStatus = {
  PENDING_CONFIRMATION: "pending_confirmation",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
  CHECKED_IN: "checked_in",
  WAITING: "waiting",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  NO_SHOW: "no_show",
} as const;

export const APPOINTMENT_STATUS_LABELS = {
  pending_confirmation: "Pendiente de confirmación",
  confirmed: "Confirmada",
  cancelled: "Cancelada",
  checked_in: "Registrado",
  waiting: "En espera",
  in_progress: "En progreso",
  completed: "Completada",
  no_show: "No asistió",
} satisfies Record<AppointmentStatusType, string>;

export const APPOINTMENT_STATUS_META: Record<
  AppointmentStatusType,
  { label: string; color: string }
> = {
  pending_confirmation: {
    label: "Pendiente de confirmación",
    color: "#FFA726",
  },
  confirmed: {
    label: "Confirmada",
    color: "#66BB6A",
  },
  cancelled: {
    label: "Cancelada",
    color: "#EF5350",
  },
  checked_in: {
    label: "Registrado",
    color: "#42A5F5",
  },
  waiting: {
    label: "En espera",
    color: "#AB47BC",
  },
  in_progress: {
    label: "En progreso",
    color: "#29B6F6",
  },
  completed: {
    label: "Completada",
    color: "#26A69A",
  },
  no_show: {
    label: "No asistió",
    color: "#8D6E63",
  },
};
