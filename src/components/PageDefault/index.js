import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  padding: 25px 5%;
  background: var(--black);
  color: var(--white);
  flex: 1;
`;

function PageDefault({ className, children }) {
  return (
    <>

      <Menu />

      <Main>
        <div className={className}>
          {children}
        </div>
      </Main>

      <Footer />

    </>
  );
}

PageDefault.defaultProps = {
  className: '',
};

PageDefault.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageDefault;
