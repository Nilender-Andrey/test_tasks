import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFetchTasks, IFetchTasksProps } from '../../../models/models';
import getPageCount from '../../../utils/get_page_count';

const fetchTasks = createAsyncThunk(
  'task/fetchAll',
  async ({ limit = 10, page = 1 }: IFetchTasksProps, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _limit: limit,
            _page: page,
          },
        },
      );

      const maxPage = getPageCount(
        Number(response.headers['x-total-count']),
        limit,
      );

      const data: IFetchTasks = { data: response.data, maxPage };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Серевер не отвечает, попробуйте позже');
    }
  },
);

export default fetchTasks;
