import React, { useEffect, useState } from 'react';

import categoriasRepository from '../../repositories/categorias';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import './Home.css';

function Home() {
  const [categorias, setCategorias] = useState([]);
  const [errorOnLoading, setErrorLoadingStatus] = useState();

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(async (content) => setCategorias([...content]))
      .catch((error) => setErrorLoadingStatus(error.message));
  }, []);

  return (
    <PageDefault className="Home">

      {categorias.length === 0 && (
        <div id="loading">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      {categorias.length > 0 && errorOnLoading && (
        <div id="LoadingError">
          <h1>{errorOnLoading}</h1>
        </div>
      )}

      {!errorOnLoading && categorias.map((categoria, index) => {
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
