import React from 'react';

import './custom_button.css';

interface ICustomButton {

  nameClass: string;
  handler: () => void;
  children: React.ReactNode;
}

function CustomButton({ children, nameClass, handler }: ICustomButton) {
  return (
    <button
      className={`custom_button custom_button_${nameClass}`}
      type="button"
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default CustomButton;
