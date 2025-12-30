import type { AppointmentStatus } from "../constants/Appointment.const";

export type AppointmentStatusType =
  (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
