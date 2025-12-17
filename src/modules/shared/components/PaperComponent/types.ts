import type { ReactNode } from "react";

export type ColorVariant = "neutral" | "success" | "error" | "info" | "warning";

export interface IPaperComponentProps {
  color?: ColorVariant;
  children?: ReactNode;
}

export type SectionStyle = {
  backgroundColor: string;
  borderColor: string;
};
