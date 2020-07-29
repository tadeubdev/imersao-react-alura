import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'

function CadastroDeVideo() {
  return (
    <PageDefault>

      <h1>Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar nova categoria
      </Link>

      <br />

      <Link to="/">
        Ir para home
      </Link>
      
    </PageDefault>
  )
}

export default CadastroDeVideo;