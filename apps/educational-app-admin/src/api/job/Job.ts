export type Job = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  company: string | null;
  location: string | null;
  salary: number | null;
};
