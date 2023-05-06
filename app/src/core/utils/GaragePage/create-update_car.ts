import { createCar } from '../../api/createCar';
import CreateUpdateCar from '../../component/CreateUpdateCar';
import RaceBlock from '../../component/RaceBlock';
import { Car } from '../../types/car';

export async function createUpdateCar(value: 'Create car' | 'Update car') {
  const capitalizeName = (
    CreateUpdateCar.textObject.name[0].toLocaleUpperCase()
    + CreateUpdateCar.textObject.name.slice(1)
  );
  const newCar: Car = {
    name: capitalizeName,
    color: CreateUpdateCar.textObject.color,
    id: Date.now(),
  };

  if (value === 'Create car') {
    if (newCar.name === '') {
      throw new Error('Enter the name of the car!!!');
    }

    await createCar(newCar);
    await RaceBlock.refreshComponent();

    const inputText = document.getElementById('create_car') as HTMLInputElement;
    inputText.value = '';
    CreateUpdateCar.textObject.name = '';
  }
}
