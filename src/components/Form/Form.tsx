import React from 'react';
import OptionsContainer from '../Options/Options_container';
import SearchContainer from '../Search/Search_container';

import './Form.scss';

function Form() {
  return (
    <div className="form">
      <h1 className="title">Search for books</h1>
      <SearchContainer />
      <OptionsContainer />
    </div>
  );
}

export default Form;
