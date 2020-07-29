import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'

import FormField from '../../components/FormField'

function CadastroDeCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00'
  };
  
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores]  = useState(valoresIniciais);

  function handleChangeValue(key, value) {
    setValores({
      ...valores,
      [key]: value
    })
  }

  function handleChange({ target }) {
    handleChangeValue(
      target.getAttribute('name'),
      target.value
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (valores.nome) {
      const payload = {
        cor: valores.cor,
        nome: valores.nome,
        descricao: valores.descricao,
      };
      setCategorias([ payload, ...categorias ]);
      setValores(valoresIniciais);
    }
  }

  return (
    <PageDefault>

      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome"
          as="input"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        ></FormField>

        <FormField
          label="Descrição"
          as="textarea"
          type="text"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        ></FormField>

        <FormField
          label="Cor"
          as="input"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        ></FormField>

        <button>
          Cadastrar
        </button>
      </form>

      <br />

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>{categoria.nome} - {categoria.descricao} ({categoria.cor})</li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
      
    </PageDefault>
  )
}

export default CadastroDeCategoria;