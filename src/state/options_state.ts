import { createSlice } from '@reduxjs/toolkit';

interface OptionsState {
  search: string;
  category: string;
  sorting: string;
}

const initialState: OptionsState = {
  search: '',
  category: '',
  sorting: 'relevance',
};

const optionsState = createSlice({
  name: 'options',
  initialState,

  reducers: {
    changeSearch(state, data) {
      state.search = data.payload;
    },
    changeCategory(state, data) {
      state.category = data.payload;
    },
    changeSorting(state, data) {
      state.sorting = data.payload;
    },
  },
});

export default optionsState.reducer;

export const { changeSearch, changeCategory, changeSorting } = optionsState.actions;
