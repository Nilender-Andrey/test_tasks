import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeSorting } from '../../state/books_state';
import { RootState } from '../../state/store';
import Options from './Options';

export default function OptionsContainer() {
  const category = useSelector((state: RootState) => state.booksReducer.category);
  const sorting = useSelector((state: RootState) => state.booksReducer.sorting);
  const dispatch = useDispatch();

  const handlerCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCategory(e.target.value));
  };
  const handlerSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSorting(e.target.value));
  };

  return (
    <Options
      category={category}
      sorting={sorting}
      handlerCategoriesChange={handlerCategoriesChange}
      handlerSortingChange={handlerSortingChange}
    />
  );
}
