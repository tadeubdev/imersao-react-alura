import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

function getAll() {
  return fetch(`${URL_VIDEOS}`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível encontrar os vídeos!');
    });
}

function create({
  categoriaId, titulo, url,
}) {
  const payload = {
    categoriaId, titulo, url,
  };

  return fetch(`${URL_VIDEOS}`, {
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
  create,
};
