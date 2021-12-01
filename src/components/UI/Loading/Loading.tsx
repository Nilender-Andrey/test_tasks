import React from 'react';
import spinner from '../../../assets/Spinner.svg';
import './Loading.scss';

export default function Loading() {
  return (
    <div className="spinner-wrap">
      <img className="spinner" src={spinner} alt="spinner" />
    </div>
  );
}
