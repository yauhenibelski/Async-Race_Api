import App from '../app';
import Header from '../component/Header';

export function router() {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    App.renderPage(hash);
    Header.render();
  });
}
