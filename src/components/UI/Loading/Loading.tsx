import React from 'react';
import svg from '../../../assets/Spinner.svg';
import './Loading.scss';

export default function Loading() {
  return (
    <div className="spinner-wrap">
      <img className="spinner" src={svg} alt="spinner" />
    </div>
  );
}
