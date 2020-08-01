import React, { useState, useEffect } from 'react';

import categoriasRepository from '../../repositories/categorias';
import useForm from '../../hooks/userForm';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';
import Loading from '../../components/Loading';

import './CadastroDeCategoria.css';

function CadastroDeCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00',
  };

  const { handleChange, clearForm, valores } = useForm(valoresIniciais);

  const [isLoading, setLoadingStatus] = useState(true);
  const [errorOnLoading, setErrorLoadingStatus] = useState();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then(async (content) => setCategorias([...content]))
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => setLoadingStatus(false));
  }, []);

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

  return (
    <PageDefault className="CadastroDeCategoria">

      {isLoading && <Loading />}

      {!isLoading && errorOnLoading && (
        <div id="LoadingError">
          <h1>{errorOnLoading}</h1>
        </div>
      )}

      {!isLoading && !errorOnLoading && (
        <div id="loaded">
          <h1>Cadastro de categorias</h1>

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
