import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';

import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';

import './CadastroDeCategoria.css';
import useForm from '../../hooks/userForm';

function CadastroDeCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00',
  };

  const { handleChange, clearForm, valores } = useForm(valoresIniciais);

  const base = window.location.href.includes('localhost') ? 'http://localhost:8080' : 'https://teedflix.herokuapp.com';
  const url = `${base}/categorias`;

  const [isLoading, setLoadingStatus] = useState(true);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (valores.titulo) {
      const payload = {
        id: categorias.length + 1,
        cor: valores.cor,
        titulo: valores.titulo,
        descricao: valores.descricao,
      };
      setCategorias([payload, ...categorias]);
      clearForm();
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
  }, [url]);

  return (
    <PageDefault className="CadastroDeCategoria">

      {isLoading && (
        <div id="loading">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      {isLoading === false && (
        <div id="loaded">
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
        </div>
      )}

    </PageDefault>
  );
}

export default CadastroDeCategoria;
