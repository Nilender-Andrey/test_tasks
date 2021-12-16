import React from 'react';

type ImageFocusType ={
  focusImage: string
  focusOnImageHandler: (url: string) => void;
}

function ImageFocus({ focusImage, focusOnImageHandler }:ImageFocusType) {
  return (

    <div
      className="image-focus"
      onClick={() => focusOnImageHandler(focusImage)}
      onKeyDown={(e) => e.code === 'Enter' && focusOnImageHandler(focusImage)}
      role="button"
      tabIndex={0}
    >
      <img className="image-focus__img" src={focusImage} alt="" />
    </div>

  );
}

export default ImageFocus;
