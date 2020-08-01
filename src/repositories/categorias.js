import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível encontrar as categorias!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível encontrar as categorias!');
    });
}

function create({
  cor, titulo, descricao,
}) {
  const payload = {
    cor, titulo, descricao,
  };

  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível salvar os dados!');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
