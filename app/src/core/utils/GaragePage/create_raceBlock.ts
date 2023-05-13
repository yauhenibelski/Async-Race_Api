import { getCars } from '../../api/getCars';
import CarBlock from '../../component/CarBlock';
import Header from '../../component/Header';
import { Car } from '../../types/types';
import { pageLimit } from '../../constants/pageLimit';
import Pagination from '../../component/Pagination';
import RaceBlock from '../../component/RaceBlock';

export async function createBlock(thisContainer: HTMLElement) {
  const container = thisContainer;
  const { response, totalCount } = await getCars(Header.textObject.pageNum, pageLimit);

  container.innerHTML = '';

  Header.textObject.totalCountCars = totalCount;
  Header.render();

  if (!totalCount) {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'No cars in the garage';

    container.append(h2);
  } else {
    await response.then((cars) => {
      RaceBlock.currentCars = [];
      cars.forEach((car: Car) => { container.append(new CarBlock(car).render()); });
    });
  }
  if (totalCount > pageLimit) {
    container.append(new Pagination(totalCount).render());
  }
}
