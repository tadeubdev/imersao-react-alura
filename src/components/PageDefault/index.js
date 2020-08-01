import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  padding: 25px 5%;
  background: var(--black);
  color: var(--white);
  flex: 1;
  ${({ noPadding }) => noPadding && css`
    padding: 0 !important;
  `}
`;

function PageDefault({ className, children, noPadding }) {
  return (
    <>

      <Menu />

      <Main noPadding={noPadding}>
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
  noPadding: '',
};

PageDefault.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageDefault;
