import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../api/api';
import { addSearch, changeIsLoading, changeNewSearch } from '../../state/books_state';

import { RootState } from '../../state/store';
import Search from './Search';

export default function SearchContainer() {
  const { search, category, sorting } = useSelector((state: RootState) => state.booksReducer);
  const { startIndex, isLoading } = useSelector((state: RootState) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchAllBooks({ search, category, sorting, startIndex }));
    }
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeNewSearch(e.target.value));
  };

  const clickHandler = async () => {
    dispatch(addSearch());
    dispatch(changeIsLoading(true));
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addSearch());
      dispatch(changeIsLoading(true));
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
