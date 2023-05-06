import { createCar } from '../../api/createCar';
import CreateUpdateCar from '../../component/CreateUpdateCar';
import RaceBlock from '../../component/RaceBlock';
import { Car } from '../../types/car';

export async function createUpdateCar(value: 'Create car' | 'Update car') {
  if (CreateUpdateCar.textObject.text === '') {
    throw new Error('Enter the name of the car!!!');
  }
  const capitalizeCarName = (
    CreateUpdateCar.textObject.text[0].toLocaleUpperCase()
      + CreateUpdateCar.textObject.text.slice(1)
  );

  const newCar: Car = {
    name: capitalizeCarName,
    color: CreateUpdateCar.textObject.color,
    id: Date.now(),
  };

  if (value === 'Create car') {
    await createCar(newCar);
    await RaceBlock.recreateComponent();
  }
}
