import Header from '../../component/Header';

export function createHeader(thisContainer: HTMLElement) {
  const container = thisContainer;
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  h2.innerHTML = `${Header.textObject.containName} (${Header.textObject.totalCountCars})`;
  h3.innerHTML = `${Header.textObject.pageText} #${Header.textObject.pageNum}`;

  container.innerHTML = '';
  container.append(h2);
  container.append(h3);
}
