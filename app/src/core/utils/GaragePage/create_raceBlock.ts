import { getCars } from '../../api/getCars';
import CarBlock from '../../component/CarBlock';
import { Car } from '../../types/car';

export async function createBlock(thisContainer: HTMLElement) {
  const container = thisContainer;
  const { response, totalCount } = await getCars();

  if (totalCount ? !parseInt(totalCount, 10) : false) {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'No cars in the garage';

    container.append(h2);
  } else {
    container.innerHTML = '';
    response.then((cars) => {
      cars.forEach((car: Car) => {
        container.append(
          new CarBlock(car.id, car.name, car.color).render(),
        );
      });
    });
  }
}
