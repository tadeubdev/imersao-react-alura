import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import categoriasRepository from '../../repositories/categorias';
import videosRepository from '../../repositories/videos';

import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/userForm';
import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';
import Loading from '../../components/Loading';

import Form from '../../components/Form';
import FormFooter from '../../components/FormFooter';

function CadastroDeVideo() {
  const valoresIniciais = {
    url: '',
    titulo: '',
    categoria: '',
  };

  const { handleChange, valores } = useForm(valoresIniciais);
  const history = useHistory();

  const [isLoading, setLoadingStatus] = useState(true);
  const [errorOnLoading, setErrorLoadingStatus] = useState();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map((categoria) => categoria.titulo);

  useEffect(() => {
    categoriasRepository.getAll()
      .then(async (content) => setCategorias([...content]))
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => {
        setTimeout(() => setLoadingStatus(false), 200);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (valores.titulo && valores.url && valores.categoria) {
      const categoriaSelecionada = categorias.find((categoria) => {
        return categoria.titulo === valores.categoria;
      });
      if (!categoriaSelecionada) return;
      const categoriaId = categoriaSelecionada.id;
      videosRepository.create({
        url: valores.url,
        titulo: valores.titulo,
        categoriaId,
      })
        .then(() => {
          localStorage.setItem('_flash', JSON.stringify({
            type: 'success',
            message: 'Vídeo cadastrado com sucesso!',
          }));
        })
        .catch((error) => {
          localStorage.setItem('_flash', JSON.stringify({
            type: 'error',
            message: `Não foi possível salvar o vídeo ${error.message}`,
          }));
        })
        .then(() => history.push('/'));
    }
  }

  return (
    <PageDefault>

      {isLoading && <Loading />}

      {!isLoading && errorOnLoading && (
        <div id="LoadingError">
          <h1>{errorOnLoading}</h1>
        </div>
      )}

      {!isLoading && !errorOnLoading && (
        <Form onSubmit={handleSubmit}>

          <h1>Cadastro de vídeo</h1>

          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Link do Vídeo"
            type="url"
            name="url"
            value={valores.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={valores.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <FormButton>
            Cadastrar
          </FormButton>

          <FormFooter>
            <Link to="/cadastro/categoria">
              Cadastrar nova categoria
            </Link>

            <Link to="/">
              Ir para home
            </Link>
          </FormFooter>
        </Form>
      )}

    </PageDefault>
  );
}

export default CadastroDeVideo;
