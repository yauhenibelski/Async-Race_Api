import { getCars } from '../../api/getCars';
import Header from '../../component/Header';
import { PageId } from '../../constants/PageId';
import { pageLimitGarage, pageLimitWinners } from '../../constants/pageLimit';
import { getWinners } from '../../api/getWinners';

export async function createHeader(thisContainer: HTMLElement) {
  const hash = window.location.hash.slice(1);

  const { totalWinners } = await getWinners(pageLimitWinners);
  const { totalCount } = await getCars(pageLimitGarage);

  Header.textObject.totalCountCars = totalCount;
  Header.textObject.totalWinners = totalWinners;

  const container = thisContainer;
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');

  if (hash === '' || hash === PageId.Garage) {
    Header.textObject.containName = 'Garage';
    h3.innerHTML = `${Header.textObject.pageText} #${Header.textObject.garagePageNum}`;
    h2.innerHTML = `${Header.textObject.containName} (${Header.textObject.totalCountCars})`;
  }
  if (hash === PageId.Winners) {
    Header.textObject.containName = 'Winners';
    h3.innerHTML = `${Header.textObject.pageText} #${Header.textObject.winnersPageNum}`;
    h2.innerHTML = `${Header.textObject.containName} (${Header.textObject.totalWinners})`;
  }

  container.innerHTML = '';
  container.append(h2);
  container.append(h3);
}
