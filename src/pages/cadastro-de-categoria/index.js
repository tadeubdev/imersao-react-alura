import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';

function CadastroDeCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00',
  };
  const url = 'http://localhost:8080/categorias';

  const [isLoading, setLoadingStatus] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function handleChangeValue(key, value) {
    setValores({
      ...valores,
      [key]: value,
    });
  }

  function handleChange({ target }) {
    handleChangeValue(
      target.getAttribute('name'),
      target.value,
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (valores.titulo) {
      const payload = {
        id: categorias.length + 1 ,
        cor: valores.cor,
        titulo: valores.titulo,
        descricao: valores.descricao,
      };
      setCategorias([payload, ...categorias]);
      setValores(valoresIniciais);
    }
  }

  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        const content = await response.json();
        setCategorias([
          ...content,
        ]);
      })
      .then(() => setLoadingStatus(false));
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          as="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <FormButton>
          Cadastrar
        </FormButton>
      </form>

      <br />

      {isLoading && (
        <div>
          loading
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
            {' - '}
            {categoria.descricao}
            {' '}
            (
            {categoria.cor}
            )
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroDeCategoria;
