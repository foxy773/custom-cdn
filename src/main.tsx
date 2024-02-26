import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { twind, cssom, observe, install } from '@twind/core';
// support shadowroot.adoptedStyleSheets in all browsers
import 'construct-style-sheets-polyfill';
// mention right path for twind.config.js
import config from '../twind.config.ts';

import { createRoot } from 'react-dom/client';
const sheet = cssom(new CSSStyleSheet());
const tw = twind(config, sheet);
// create root container where react element will be inserted
let container = document.createElement('div');
container.classList.add('react-container');

// attach shadow DOM to container
const shadowRoot = container?.attachShadow({ mode: 'open' });

// get hold of an existing element in HTML DOM
const domElement = document.querySelector('body');

// insert root container element in HTML DOM after the existing element
domElement?.after(container);

// shadow DOM as react root
const root = createRoot(shadowRoot);

// render react element inside shadow DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (shadowRoot) {
  // link sheet target to shadow dom root
  shadowRoot.adoptedStyleSheets = [sheet.target];

  // finally, observe using tw function
  observe(tw, shadowRoot);
}
