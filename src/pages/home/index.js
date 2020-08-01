import React, { useEffect, useState } from 'react';

import categoriasRepository from '../../repositories/categorias';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';
import FlashMessage from '../../components/FlashMessage';

function Home() {
  const [isLoading, setLoadingStatus] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [errorOnLoading, setErrorLoadingStatus] = useState();

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(async (content) => setCategorias([...content]))
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => setLoadingStatus(false));
  }, []);

  return (
    <PageDefault className="Home" noPadding>

      {isLoading && (
        <Loading />
      )}

      {!isLoading && errorOnLoading && (
        <div id="LoadingError">
          <h1>{errorOnLoading}</h1>
        </div>
      )}

      {!isLoading && !errorOnLoading && (
        <FlashMessage />
      )}

      {!isLoading && !errorOnLoading && categorias.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categorias[0].videos[0].titulo}
                url={categorias[0].videos[0].url}
                videoDescription="Alguns links para programadores"
              />

              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
