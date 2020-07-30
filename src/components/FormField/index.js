import React from 'react';
import styled from 'styled-components';
import './FormField.css'

const Element = styled.input`` 

function FormField({ as, label, type, name, value, onChange }) {
  return (
    <div
      className="ElementContainer"
      onClick={(event) => {
        if (event.currentTarget.querySelector('input')) {
          event.currentTarget.querySelector('input').focus();
        }
        if (event.currentTarget.querySelector('textarea')) {
          event.currentTarget.querySelector('textarea').focus();
        }
      }}
    >
      <label>{label}:</label>

      <Element
        as={as}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormField;