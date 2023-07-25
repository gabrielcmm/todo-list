export type Task = {
  id: number;
  title: string;
  description: string;
  location: string;
  done: boolean;
  dueDate: Date;
  createdAt: Date;
};
