import { getCars } from '../../api/getCars';
import CarBlock from '../../component/CarBlock';
import { Car } from '../../types/types';

export async function createBlock(thisContainer: HTMLElement) {
  const container = thisContainer;
  const { response, totalCount } = await getCars();

  if (totalCount ? !parseInt(totalCount, 10) : false) {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'No cars in the garage';

    container.append(h2);
  } else {
    container.innerHTML = '';
    await response.then((cars) => {
      cars.forEach((car: Car) => {
        container.append(
          new CarBlock(car).render(),
        );
      });
    });
  }
}
