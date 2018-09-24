import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import mainReducer from '../src/reducers';
import { Helmet } from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';

import Container from '../src/components/Container';

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.get('/api/*', (req, res) => {
  res.send('set your api routes before the following react routes');
});

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore(mainReducer);
  const reduxState = store.getState();

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Container />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactDom = renderToString(jsx);
  const helmet = Helmet.renderStatic();

  res.writeHead(200, { 'Content-Type': 'text/html' });

  const filePath = path.resolve('dist/index.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const headRegex = /(<title>).{1,}(<\/title>)/g;
    const metaRegex = /(<meta name="description").{1,}(\/>)/g;

    // inject the rendered app into webpack generated html
    // change body content, redux state & head and meta tag contents
    return res.end(
      data
        .replace(metaRegex, `${helmet.meta.toString()}`)
        .replace(headRegex, `${helmet.title.toString()}`)
        .replace('<div id="app"></div>', `<div id="app">${reactDom}</div>`)
        .replace(
          '<script></script>',
          `<script>window.REDUX_DATA = ${JSON.stringify(reduxState)}</script>`
        )
    );
  });
});

app.listen(8080);
console.log('Server starts at port 8080');
