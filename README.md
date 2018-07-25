# Webpack 4 HTML + SCSS + ES8 starter

Frontend starter: HTML + SCSS + ES8 + ESLing config

## Installation

`npm install` - install all modules  
`npm update` - update all modules to newest versions

## Usage

`npm run dev` - development build  
`npm run build` - production build

## Extras

Since Babel only transforms syntax (like arrow functions), you can use babel-polyfill in order to support new globals such as Promise or new native methods like String.padStart (left-pad).

`npm i --save-dev babel-polyfill` - install Polyfill package

updated entry in webpack.config.js:

```js
  app: [
    'babel-polyfill',
    './src/js/main.js',
    './src/scss/main.scss',
  ],
```