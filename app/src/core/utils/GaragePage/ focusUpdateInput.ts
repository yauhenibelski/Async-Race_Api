import { getCar } from '../../api/getCar';
import { Car } from '../../types/types';
import CreateUpdateCar from '../../component/CreateUpdateCar';

export async function focusUpdateInput(carId?: number) {
  CreateUpdateCar.value = CreateUpdateCar.value === 'Update car'
    ? 'Create car'
    : 'Update car';

  CreateUpdateCar.render();

  if (CreateUpdateCar.value === 'Update car' && carId) {
    const updateInput = document.getElementById('update_car_text') as HTMLInputElement;
    const updateInputColor = document.getElementById('update_car_color') as HTMLInputElement;

    updateInput.focus();

    await getCar(carId).then((car: Car) => {
      updateInputColor.value = car.color;
      updateInput.value = car.name;

      CreateUpdateCar.textObject.text = car.name;
      CreateUpdateCar.textObject.color = car.color;
      CreateUpdateCar.textObject.updateCarId = car.id;
    });
    setTimeout(() => {
      document.onclick = (e) => {
        const elem = e.target as HTMLElement;

        if (!elem.closest('.create-update-car')) {
          CreateUpdateCar.value = 'Create car';
          CreateUpdateCar.textObject.text = '';
          CreateUpdateCar.render();

          document.onclick = null;
        }
      };
    });
  }
}
