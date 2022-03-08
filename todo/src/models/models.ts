export interface IFetchTasks {
  data: ITask[];
  maxPage: number;
}

export interface IFetchTasksProps {
  limit?: number;
  page?: number;
}

export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
  options: boolean;
}
export interface IFormAddTask {
  id: string;
  title: string;
}
