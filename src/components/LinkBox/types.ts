import { As } from "shared/utilties";

export interface LinkBoxProps {
  as?: As;
  title: string;
  description?: string;
  updated_at?: Date;
  forks_count?: string;
  [key: string]: unknown;
}
