import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './tasks/task_slice';

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;
