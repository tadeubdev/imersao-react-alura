import React from 'react';
import styled from 'styled-components';

const Element = styled.input``

function FormField({ as, label, type, name, value, onChange }) {
  return (
    <div>
      <label>{label}:</label> <br />

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