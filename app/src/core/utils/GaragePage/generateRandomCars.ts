import { createCar } from '../../api/createCar';
import RaceBlock from '../../component/RaceBlock';
import { NewCar } from '../../types/types';
import { getRandomCarBrand } from './ getRandomCarBrand';

export async function generateRandomCars(count: number) {
  const newCars: NewCar[] = [];
  for (let i = 0; i < count; i += 1) {
    const randomCar: NewCar = {
      name: getRandomCarBrand(),
      color: `#${Math.random().toString(16).substring(2, 8)}`,
    };
    newCars.push(randomCar);
  }
  await createCar(newCars);
  RaceBlock.render();
}
