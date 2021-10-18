import React from 'react';

type HeaderPropsType = {
  data: {
    inputFileUpload: React.RefObject<HTMLInputElement>;
    newImageUrl: string;
    errorText:string;
    inputTextOnChangeHandler: (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    addImageFileHandler: () => void;
    addImageUrlHandler: () => void;
  };
};

export default function Header({ data }: HeaderPropsType) {
  const {
    inputFileUpload, newImageUrl, errorText,
    inputTextOnChangeHandler,
    addImageFileHandler,

    addImageUrlHandler,
  } = data;

  return (
    <header className="header">
      <div className="header-wrap">
        <input
          className="header__input"
          type="text"
          onChange={inputTextOnChangeHandler}
          value={newImageUrl}
          placeholder="Введите Url или загрузите файл картинки"
        />
        <label
          htmlFor={newImageUrl ? 'header__url-upload' : 'header__file-upload'}
          className="header__upload-label"
        >
          {newImageUrl ? (
            <input
              className="header__btn"
              id="header__url-upload"
              type="button"
              onClick={addImageUrlHandler}
            />
          ) : (
            <input
              className="header__btn"
              id="header__file-upload"
              type="file"
              ref={inputFileUpload}
              onChange={addImageFileHandler}
            />
          )}
          Добавить картинку
        </label>
      </div>
      <p className="header__error">{errorText}</p>
    </header>
  );
}
