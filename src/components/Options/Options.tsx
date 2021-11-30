import React from 'react';
import Select from '../UI/Select/Select';

import('./Options.scss');

interface OptionsProps {
  category: string;
  sorting: string;
  handlerCategoriesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlerSortingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Options({
  category,
  sorting,
  handlerCategoriesChange,
  handlerSortingChange,
}: OptionsProps) {
  return (
    <div className="form__wrap-options">
      <div className="form__wrap-options_wrap">
        <p className="options-title">Categories</p>
        <Select
          classes={'form__categories'}
          options={[
            { name: 'All', value: '' },
            { name: 'Art', value: 'art' },
            { name: 'Biography', value: 'biography' },
            { name: 'Computers', value: 'computers' },
            { name: 'History', value: 'history' },
            { name: 'Medical', value: 'medical' },
            { name: 'Poetry', value: 'poetry' },
          ]}
          value={category}
          onChangeHandler={handlerCategoriesChange}
        />
      </div>

      <div className="form__wrap-options_wrap">
        <p className="options-title">Sorting by</p>
        <Select
          classes={'form__sorting'}
          options={[
            { name: 'Relevance', value: 'relevance' },
            { name: 'Newest', value: 'newest' },
          ]}
          value={sorting}
          onChangeHandler={handlerSortingChange}
        />
      </div>
    </div>
  );
}
