import { NewCar } from '../types/types';
import { baseUrl } from './base_url';

export async function createCar(newCar: NewCar[] | NewCar) {
  const cars = Array.isArray(newCar) ? newCar : [newCar];
  cars.map((car) => fetch(`${baseUrl}garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  }));
  return Promise.all(cars)
    .then(() => fetch('http://localhost:3000/garage'))
    .then((response) => response.body!.getReader())
    .then((reader) => {
      while (true) {
        let load = true;
        reader.read().then(({ done }) => {
          load = done;
        });
        if (load) {
          break;
        }
      }
    });
}
