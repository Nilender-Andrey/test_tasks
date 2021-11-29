import React, { useEffect } from 'react';
import { getBooks } from '../../api/api';
import Main from './Main';

export default function MainContainer() {
  // const search = useSelector((state: RootState) => state.optionsReducer.search);
  useEffect(() => {
    //getBooks('asd');
  }, []);

  return <Main />;
}
