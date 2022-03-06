import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import fetchTasks, { IFetchTasks } from './fetch_tasks';

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

interface TaskState {
  tasks: ITask[];
  formAddTask: IFormAddTask;
  taskFormOpen: boolean;
  maxPage: number;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: TaskState = {
  tasks: [],
  formAddTask: { id: '', title: '' },
  taskFormOpen: false,
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
    addMaxPage(state, action: PayloadAction<number>) {
      if (state.page === 1) state.maxPage = action.payload;
    },
    remove(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    option(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, options: !task.options }
        : { ...task, options: false }));
    },
    important(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, important: !task.important }
        : task));
    },
    complete(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => (task.id === action.payload
        ? { ...task, completed: !task.completed }
        : task));
    },
    change(state, action: PayloadAction<string>) {
      state.taskFormOpen = true;
      const task = state.tasks.find((item) => item.id === action.payload);
      if (task) {
        state.formAddTask.title = task.title;
        state.formAddTask.id = task.id;
      }
    },
    addTaskTitle(state, action: PayloadAction<string>) {
      state.formAddTask.title = action.payload;
    },
    taskFormCancel(state) {
      state.formAddTask = { id: '', title: '' };
      state.taskFormOpen = false;
    },
    taskFormOpen(state) {
      state.taskFormOpen = true;
    },
    addTask(state) {
      const title = state.formAddTask.title.trim();
      if (state.formAddTask.id) {
        state.tasks = state.tasks.map((item) => ((item.id === state.formAddTask.id)
          ? { ...item, title }
          : item));
        state.taskFormOpen = false;
      } else if (title.length) {
        const newTask = {
          id: uuidv4(),
          title,
          completed: false,
          important: false,
          options: false,
        };
        state.tasks = [newTask, ...state.tasks];

        state.taskFormOpen = false;
      } else {
        state.taskFormOpen = false;
      }
      state.formAddTask = { id: '', title: '' };
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchTasks>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.tasks = [...state.tasks, ...action.payload.data];
      state.maxPage = action.payload.maxPage;
    },
    [fetchTasks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTasks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default taskSlice.reducer;
