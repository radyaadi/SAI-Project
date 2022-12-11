import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/style.css';
import '../style/detail.css';
import '../style/responsive.css';
import App from './view/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#mainContent'),
});

// eslint-disable-next-line prefer-arrow-callback, func-names
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

console.log('Hello Coders!');
