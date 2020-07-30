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
  value: '',
  label: '',
  onChange: () => {},
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  //
  as: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
