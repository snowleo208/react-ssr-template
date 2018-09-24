# React Sever Rendering Template

A simple React SSR template based on [tutorial from Freecodecamp](https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4).

Using these tools:

- React
- React-router
- React-hot-loader
- Redux
- Babel 7
- Express/Node
- Sass (With autoprefixer)
- Webpack
- Eslint
- React-helmet (For changing head, meta tags automatically, SEO-friendly)

Output are all minified with hash filenames and serve all files in `/dist` in production.

## How to use

### Install

Install git in your machine and clone this repo with:

```
git clone https://github.com/snowleo208/react-ssr-template.git
```

Then, install `npm` first and use this command:

```
npm install
```

Open development server with:

```
npm run dev
```

Finally, you should see `localhost:3000` in your browser. If you see a blank page, refresh it after your console said 'Compiled successfully'.

### Usage

After install all dependencies, you can use these commands to open or build your apps.

```
npm start - start production server
npm run build - build your apps
npm run dev - start both client and backend development server
npm run server - start backend server
npm run client - start client server (with hot reloading)
```

Enjoy coding!
