import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchTasks, { IFetchTasks } from './fetch_tasks';

export interface ITask{
  id:string
  title:string,
  completed:boolean,
  important: boolean;
  options:boolean
}
export interface INewTask{
  title:string,
}

interface TaskState{
  tasks:ITask[];
  newTask:INewTask;
  maxPage:number;
  page:number;
  isLoading:boolean;
  error:string;
}

const initialState:TaskState = {
  tasks: [],
  newTask: {
    title: '',
  },
  maxPage: 0,
  page: 1,
  isLoading: false,
  error: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    incrementPage(state) {
      if (!(state.page >= state.maxPage)) state.page += 1;
    },
    addMaxPage(state, action:PayloadAction<number>) {
      if (state.page === 1) state.maxPage = action.payload;
    },
    remove(state, action:PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    option(state, action:PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, options: !task.options }
        : { ...task, options: false }));
    },
    important(state, action:PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, important: !task.important }
        : task));
    },
    complete(state, action:PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, completed: !task.completed }
        : task));
    },
    addNewTaskTitle(state, action:PayloadAction<string>) {
      state.newTask.title = action.payload;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled.type]: (state, action:PayloadAction<IFetchTasks>) => {
      state.isLoading = false;
      state.error = '';
      state.tasks = [...state.tasks, ...action.payload.data];
      state.maxPage = action.payload.maxPage;
    },
    [fetchTasks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTasks.rejected.type]: (state, action:PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default taskSlice.reducer;
