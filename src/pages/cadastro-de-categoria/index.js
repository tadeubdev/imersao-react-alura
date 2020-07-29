import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'

function CadastroDeCategoria() {
  const [categorias, setCategorias] = useState([]);
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00'
  };

  const [valores, setValores] = useState(valoresIniciais);

  function handleChange({ target }) {
    const key = target.getAttribute('name');
    setValores({
      ...valores,
      [key]: target.value
    })
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

        <div>
          <label>Nome da categoria:</label> <br/>
          <input
            type="text"
            name="nome"
            value={valores.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Descrição:</label> <br/>
          <textarea
            type="text"
            name="descricao"
            value={valores.descricao}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cor:</label> <br/>
          <input
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handleChange}
          />
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <br />

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>{categoria.nome} ({categoria.cor})</li>
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