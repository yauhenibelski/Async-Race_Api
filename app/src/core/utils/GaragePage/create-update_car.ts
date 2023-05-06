import { createCar } from '../../api/createCar';
import CreateUpdateCar from '../../component/CreateUpdateCar';
import RaceBlock from '../../component/RaceBlock';
import { Car as CarType } from '../../types/car';
import { updateCar } from '../../api/updateCar';
import { focusUpdateInput } from './ focusUpdateInput';

export async function createUpdateCar(value: 'Create car' | 'Update car') {
  if (CreateUpdateCar.textObject.text === '') {
    throw new Error('Enter the name of the car!!!');
  }
  const capitalizeCarName = (
    CreateUpdateCar.textObject.text[0].toLocaleUpperCase()
      + CreateUpdateCar.textObject.text.slice(1)
  );

  const car: CarType = {
    name: capitalizeCarName,
    color: CreateUpdateCar.textObject.color,
    id: CreateUpdateCar.textObject.updateCarId,
  };

  if (value === 'Create car') {
    await createCar(car.name, car.color);
    RaceBlock.reCreateComponent();
  }
  if (value === 'Update car') {
    await updateCar(car);
    focusUpdateInput();
    RaceBlock.reCreateComponent();
    document.onclick = null;
  }
}
