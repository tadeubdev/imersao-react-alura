import React from 'react';

import './FlashMessage.css'

export default function FlashMessage() {
  const flashMessage = localStorage.getItem('_flash') ? JSON.parse(localStorage.getItem('_flash')): null;
  //
  localStorage.removeItem('_flash');

  if (flashMessage === null) {
    return '';
  }

  return (
    <div className={`flash-message flash-${flashMessage.type}`}>
      {flashMessage.message}
    </div>
  );
}
