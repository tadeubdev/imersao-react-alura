import React from 'react';
import styled from 'styled-components';
import './FormField.css';
import PropTypes from 'prop-types';

const Element = styled.input``;

function handleClick(event) {
  if (event.currentTarget.querySelector('input')) {
    event.currentTarget.querySelector('input').focus();
  }
  if (event.currentTarget.querySelector('textarea')) {
    event.currentTarget.querySelector('textarea').focus();
  }
}

function FormField({
  as, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div
      role="button"
      className="ElementContainer"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
    >
      <label
        htmlFor={fieldId}
      >
        {label}
        :
      </label>

      <Element
        as={as}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

FormField.defaultProps = {
  as: 'input',
  type: 'text',
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
