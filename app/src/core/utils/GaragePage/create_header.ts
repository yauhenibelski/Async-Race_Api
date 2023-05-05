import GaragePage from '../../../pages/Garage';

export function createHeder() {
  const div = document.createElement('header');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  div.className = 'header';
  h2.innerHTML = GaragePage.textObject.containName;
  h3.innerHTML = GaragePage.textObject.currentPage;

  div.append(h2);
  div.append(h3);

  return div;
}
