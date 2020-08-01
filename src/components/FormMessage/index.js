import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  padding: 10px;
  background: #ffc2c2;
  color: #792929;
  font-size: 14px;
  margin-bottom: 15px;
`;

function FormMessage({
  message,
}) {
  return (
    message.length > 0 && (
      <MessageWrapper dangerouslySetInnerHTML={{ __html: message }} />
    )
  );
}

FormMessage.defaultProps = {
  message: '',
};

FormMessage.propTypes = {
  message: PropType.string,
};

export default FormMessage;
