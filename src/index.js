import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import PageNotFound from './pages/page-not-found';
import CadastroDeVideo from './pages/cadastro-de-video';
import CadastroDeCategoria from './pages/cadastro-de-categoria';

import './reset.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/cadastro/video" exact component={CadastroDeVideo} />

      <Route path="/cadastro/categoria" exact component={CadastroDeCategoria} />

      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
