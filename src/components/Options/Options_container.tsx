import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeSorting } from '../../state/options_state';
import { RootState } from '../../state/store';
import Options from './Options';

export default function OptionsContainer() {
  const category = useSelector((state: RootState) => state.optionsReducer.category);
  const sorting = useSelector((state: RootState) => state.optionsReducer.sorting);
  const dispatch = useDispatch();

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(changeCategory(e.target.value));
  };
  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(changeSorting(e.target.value));
  };

  return (
    <Options
      category={category}
      sorting={sorting}
      handleCategoriesChange={handleCategoriesChange}
      handleSortingChange={handleSortingChange}
    />
  );
}
