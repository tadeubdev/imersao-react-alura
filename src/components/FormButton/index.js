import React from 'react'
import styled from 'styled-components';

const ElementButton = styled.button`
  min-width: 200px;
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #333;
  border-radius: 3px;
  text-transform: uppercase;
`;

function FormButton({ children }) {
  return (
    <ElementButton>
      {children}
    </ElementButton>
  )
}

export default FormButton;