import Header from '../../component/Header';
import { PageId } from '../../constants/PageId';

export function createHeader(thisContainer: HTMLElement) {
  const hash = window.location.hash.slice(1);

  const container = thisContainer;
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  if (hash === '' || hash === PageId.Garage) {
    Header.textObject.containName = 'Garage';
    h3.innerHTML = `${Header.textObject.pageText} #${Header.textObject.garagePageNum}`;
  }
  if (window.location.hash.slice(1) === 'winners') {
    Header.textObject.containName = 'Winners';
    h3.innerHTML = `${Header.textObject.pageText} #${Header.textObject.winnersPageNum}`;
  }
  h2.innerHTML = `${Header.textObject.containName} (${Header.textObject.totalCountCars})`;

  container.innerHTML = '';
  container.append(h2);
  container.append(h3);
}
