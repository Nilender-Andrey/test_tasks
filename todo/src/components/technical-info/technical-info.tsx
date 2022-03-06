import React from 'react';

import './technical-info.css';

interface ITechnicalInfoProps{
  isLoading: boolean,
  error: string,
}

function TechnicalInfo({
  isLoading,
  error,
}:ITechnicalInfoProps) {
  const spinner = isLoading && !error ? <img src='./assets/svg/spinner.svg' alt='spinner' /> : null;
  const errorText = error ? <p>Не удалось загрузить данные, попробуйте позже</p> : null;

  return (
    <div className='technical-info'>
      {spinner}
      {errorText}
    </div>
  );
}

export default TechnicalInfo;
