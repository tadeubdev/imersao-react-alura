import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin-bottom: 20px;

  h1 {
    text-align: center;
  }

  @media (min-width: 801px) {
    & {
      width: 500px;
      margin: 0 auto;
      padding: 5px 30px 30px 30px;
      background: rgba(255,255,255,.2);
    }
  }
`;

function Form({
  onSubmit, children,
}) {
  return (
    <FormWrapper onSubmit={onSubmit}>
      {children}
    </FormWrapper>
  );
}

Form.defaultProps = {
  onSubmit: () => {},
};

Form.propTypes = {
  children: PropType.node.isRequired,
  onSubmit: PropType.func,
};

export default Form;
