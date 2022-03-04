import axios from 'axios';
import { ITask } from '../../../models/ITask';
import { AppDispatch } from '../../store';

const getTasks = () => async (dispatch:AppDispatch) => {
  try {
    const res = await axios.get<ITask[]>('https://jsonplaceholder.typicode.com/users/1/todos');
  } catch (error) {
    console.log(error);
  }
};

export default getTasks;
