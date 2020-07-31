import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível encontrar os vídeos!');
    });
}

export default {
  getAllWithVideos,
};
