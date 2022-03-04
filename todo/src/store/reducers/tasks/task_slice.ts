import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../../models/ITask';

interface TaskState{
  tasks:ITask[];
  isLoading:boolean;
  error:string;
}

const initialState:TaskState = {
  tasks: [],
  isLoading: false,
  error: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTasks() {

    },
  },
});

export default taskSlice.reducer;
