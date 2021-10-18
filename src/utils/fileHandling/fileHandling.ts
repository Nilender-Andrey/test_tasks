import { Dispatch } from '@reduxjs/toolkit';
import { changeTheErrorText } from '../../state/ErrorsState';
import addImageFile from './addImageFile';
import addJsonFile from './addJsonFile';

export default function fileHandling(file: File, dispatch:Dispatch<any>) {
  dispatch(changeTheErrorText('ERROR_0'));

  if (file.type.startsWith('image/')) {
    addImageFile(file, dispatch);
  } else if (file.type === 'application/json') {
    addJsonFile(file, dispatch);
  } else {
    dispatch(changeTheErrorText('ERROR_1'));
  }
}
