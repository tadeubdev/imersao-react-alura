import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import categoriasRepository from '../../repositories/categorias';
import useForm from '../../hooks/userForm';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import FormButton from '../../components/FormButton';
import Loading from '../../components/Loading';

import Form from '../../components/Form';
import FormFooter from '../../components/FormFooter';

function CadastroDeCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00',
  };
  const history = useHistory();

  const [message, setMessage] = useState('');
  const MessageWrapper = styled.div`
    padding: 10px;
    background: #ffc2c2;
    color: #792929;
    font-size: 14px;
    margin-bottom: 15px;
  `;

  const { handleChange, valores } = useForm(valoresIniciais);

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
    setMessage('');

    if (!valores.titulo || !valores.descricao) {
      return setMessage('Preencha todos os campos!');
    }
    const categoryFound = categorias.find((categoria) => categoria.titulo === valores.titulo);
    if (categoryFound) {
      return setMessage('Ops! Categoria já existe!');
    }
    const payload = {
      cor: valores.cor,
      titulo: valores.titulo,
      descricao: valores.descricao,
    };
    return categoriasRepository.create(payload)
      .then(() => {
        localStorage.setItem('_flash', JSON.stringify({
          type: 'success',
          message: 'Categoria cadastrada com sucesso!',
        }));
      })
      .catch((error) => {
        localStorage.setItem('_flash', JSON.stringify({
          type: 'error',
          message: `Não foi possível criar a cateogira! ${error.message}`,
        }));
      })
      .then(() => history.push('/'));
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
        <Form onSubmit={handleSubmit}>

          <h1>Cadastro de categorias</h1>

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

          {message.length > 0 && (<MessageWrapper>{message}</MessageWrapper>)}

          <FormButton>
            Cadastrar
          </FormButton>

          <FormFooter>
            <Link to="/cadastro/video">
              Cadastrar novo vídeo
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

export default CadastroDeCategoria;
