import React from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function PageNotFound() {
  return (
    <PageDefault>

      <h1>Ops!</h1>

      <p>Página não encontrada!</p>

      <br />

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  )
}

export default PageNotFound;