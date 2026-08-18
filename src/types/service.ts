export type ServiceCategory =
  | "Education"
  | "Software";

export type Service = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  href?: string;
  features?: string[];
  technologies?: string[];
};

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type ServiceStat = {
  value: string;
  label: string;
  description?: string;
};

export type SoftwareCompany = {
  id: number;
  name: string;
  logo: string;
  href: string;
  description?: string;
};