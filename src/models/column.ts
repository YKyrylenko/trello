import Task from "./task";

export default interface Column {
  id: number;
  title: string;
  tasks: Task[];
}
