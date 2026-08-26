import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react-snap pre-renders this app to static HTML at build time (see the
// "postbuild" script + "reactSnap" config in package.json). When that static
// HTML is served, `#root` already has the full markup inside it, so real
// browsers should hydrate onto it instead of wiping and re-rendering — that's
// what makes the page both crawlable (bots see real HTML immediately) and a
// normal fast SPA once React takes over. In dev / a first-ever build, #root
// is empty, so we fall back to a plain render.
const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
