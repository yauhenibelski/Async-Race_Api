import { NewCar } from '../types/types';
import { baseUrl } from '../constants/base_url';

export async function createCar(newCar: NewCar[] | NewCar) {
  const url = `${baseUrl}garage`;
  const cars = Array.isArray(newCar) ? newCar : [newCar];

  cars.map((car) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  }));
  await Promise.all(cars)
    .then(() => fetch(url))
    .then((response) => response.body?.getReader())
    .then((reader) => {
      while (true) {
        let load = true;

        reader?.read().then(({ done }) => {
          load = done;
        });

        if (load) {
          break;
        }
      }
    });
}
