import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const WrapFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.1);
  a {
    text-decoration: none;
  }
  a:nth-child(2n) {
    float: right;
  }
`;

function FormFooter({
  children,
}) {
  return (
    <WrapFooter>
      {children}
    </WrapFooter>
  );
}

FormFooter.propTypes = {
  children: PropType.node.isRequired,
};

export default FormFooter;
