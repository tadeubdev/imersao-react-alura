import React, { useEffect, useState } from 'react';

import categoriasRepository from '../../repositories/categorias';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import './Home.css';

function Home() {
  const [isLoading, setLoadingStatus] = useState(true);
  const [errorOnLoading, setErrorLoadingStatus] = useState();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(async (content) => {
        setCategorias([...content]);
      })
      .catch((error) => setErrorLoadingStatus(error.message))
      .then(() => setLoadingStatus(false));
  }, []);

  return (
    <div className="Home">
      <Menu />

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

      {isLoading === false && errorOnLoading && (
        <div id="LoadingError">
          <h1>{errorOnLoading}</h1>
        </div>
      )}

      {isLoading === false && !errorOnLoading && (
        <div>
          <BannerMain
            videoTitle={categorias[0].videos[0].titulo}
            url={categorias[0].videos[0].url}
            videoDescription="Alguns links para programadores"
          />

          {categorias.map((categoria, index) => (
            <Carousel
              key={categoria.id}
              ignoreFirstVideo={index === 0}
              category={categoria}
            />
          ))}
        </div>
      )}

      <Footer />

    </div>
  );
}

export default Home;
