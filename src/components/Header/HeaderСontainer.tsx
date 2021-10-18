import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addId } from '../../helpers/addId';

import addImageFile from '../../utils/fileHandling/addImageFile';

import {
  addImageUrl,
  addListImage,
  writeImageUrl,
} from '../../state/ImageState';
import { RootState } from '../../state/store';
import Header from './Header';
import fileHandling from '../../utils/fileHandling/fileHandling';
import { changeTheErrorText } from '../../state/ErrorsState';

export default function HeaderСontainer() {
  const newImageUrl = useSelector(
    (state: RootState) => state.imagesReducer.newImageUrl,
  );

  const errorText = useSelector(
    (state: RootState) => state.errorsReducer.errorText,
  );
  const inputFileUpload = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  function inputTextOnChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    dispatch(writeImageUrl(event.target.value));
  }

  function addImageUrlHandler() {
    dispatch(changeTheErrorText('ERROR_0'));

    const img = new Image();

    img.onload = () => {
      dispatch(
        addImageUrl({ id: Date.now(), width: img.width, height: img.height }),
      );
    };

    img.onerror = () => {
      dispatch(changeTheErrorText('ERROR_2'));
      dispatch(writeImageUrl(''));
    };
    img.src = newImageUrl;
  }

  function addImageFileHandler() {
    if (inputFileUpload.current && inputFileUpload.current.files) {
      const file = inputFileUpload.current.files[0];
      inputFileUpload.current.value = '';

      if (file) {
        fileHandling(file, dispatch);
      }
    }
  }

  const data = {
    inputFileUpload,
    newImageUrl,
    errorText,
    inputTextOnChangeHandler,
    addImageFileHandler,
    addImageUrlHandler,
  };

  return <Header data={data} />;
}
