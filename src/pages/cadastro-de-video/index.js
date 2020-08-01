import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import categoriasRepository from '../../repositories/categorias';
import videosRepository from '../../repositories/videos';

import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/userForm';
import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';
import Loading from '../../components/Loading';

import './CadastroDeVideo.css';

function CadastroDeVideo() {
  const valoresIniciais = {
    url: 'https://www.youtube.com/watch?v=36YnV9STBqc',
    titulo: 'Teste',
    categoria: 'Teste',
  };

  const { handleChange, valores } = useForm(valoresIniciais);
  const history = useHistory();

  const [isLoading, setLoadingStatus] = useState(true);
  const [errorOnLoading, setErrorLoadingStatus] = useState();
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then(async (content) => setCategorias([...content]))
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => setLoadingStatus(false));

    videosRepository.getAll()
      .then(async (content) => setVideos([...content]))
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => setLoadingStatus(false));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (valores.titulo) {
      videosRepository.create({
        id: videos.length + 1,
        url: valores.url,
        titulo: valores.titulo,
        categoriaId: valores.categoriaId,
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
        <div id="loaded">
          <h1>Cadastro de vídeo</h1>

          <form onSubmit={handleSubmit}>

            <FormField
              label="Título"
              type="text"
              name="titulo"
              value={valores.titulo}
              onChange={handleChange}
            />

            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={valores.categoria}
              onChange={handleChange}
              suggestions={categorias.map((categoria) => categoria.titulo)}
            />

            <FormButton>
              Cadastrar
            </FormButton>
          </form>

          <br />

          <Link to="/cadastro/categoria">
            Cadastrar nova categoria
          </Link>

          <Link to="/">
            Ir para home
          </Link>
        </div>
      )}

    </PageDefault>
  );
}

export default CadastroDeVideo;
