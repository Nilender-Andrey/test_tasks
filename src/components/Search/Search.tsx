import React from 'react';

import('./Search.scss');

interface SearchProps {
  clickHandler: () => void;
  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ clickHandler, handleKeyDown, handleOnChange }: SearchProps) {
  return (
    <div className="form__wrap-search">
      <input className="form__input" onKeyDown={handleKeyDown} onChange={handleOnChange} />
      <button type="button" className="form__button" onClick={clickHandler} />
    </div>
  );
}

export default Search;
