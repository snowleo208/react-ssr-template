import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Container from '../components/Container';

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const context = {};

  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Container />
    </StaticRouter>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.end(htmlTemplate(reactDom));

  const filePath = path.resolve('dist/index.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    // inject the rendered app into html and send it
    return res.end(
      data.replace('<div id="app"></div>', `<div id="app">${reactDom}</div>`)
    );
  });
});

app.listen(8080);
console.log('Server starts at port 8080');

// function htmlTemplate(reactDom) {
//   return `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <meta charset="utf-8">
//             <title>React SSR</title>
//         </head>

//         <body>
//             <div id="app">${reactDom}</div>
//             <script type="text/javascript" src="./dist/app.bundle.js"></script>
//             <script type="text/javascript" src="./dist/vendor.bundle.js"></script>
//         </body>
//         </html>
//     `;
// }
