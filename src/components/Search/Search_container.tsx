import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../api/api';
import { addBooks, changeFoundQuantity } from '../../state/books_state';
import { changeSearch } from '../../state/options_state';
import { RootState } from '../../state/store';
import Search from './Search';

export default function SearchContainer() {
  const search = useSelector((state: RootState) => state.optionsReducer.search);
  const category = useSelector((state: RootState) => state.optionsReducer.category);
  const sorting = useSelector((state: RootState) => state.optionsReducer.sorting);

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  const clickHandler = () => {
    getBooks(search, category, sorting).then((res) => {
      dispatch(addBooks(res.books));
      dispatch(changeFoundQuantity(res.number));
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getBooks(search, category, sorting).then((res) => {
        dispatch(addBooks(res.books));
        dispatch(changeFoundQuantity(res.number));
      });
    }
  };

  return (
    <Search
      clickHandler={clickHandler}
      handleKeyDown={handleKeyDown}
      handleOnChange={handleOnChange}
    />
  );
}
