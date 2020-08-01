import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ElementButtonWrap = styled.div`
  &:after {
    content: ' ';
    clear: both;
    display: block;
    margin-bottom: 20px;
  }
`;

const ElementButton = styled.button`
  min-width: 200px;
  float: right;
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #333;
  border-radius: 3px;
  text-transform: uppercase;
`;

function FormButton({ children }) {
  return (
    <ElementButtonWrap>
      <ElementButton>
        {children}
      </ElementButton>
    </ElementButtonWrap>
  );
}

FormButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormButton;
