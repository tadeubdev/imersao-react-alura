import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  );
}

FormButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormButton;
