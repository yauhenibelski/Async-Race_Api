import { createColorCar } from '../utils/create_a_car_by_color';
import RaceBlock from './RaceBlock';
import Component from './template/component';

class CarFinishList extends Component {
  static finishCars: [number, number][] = [];

  constructor() {
    super('div', 'finish-list');
  }

  private createFinishList() {
    const listFinishCarId = CarFinishList.finishCars;
    CarFinishList.finishCars = [];

    if (!listFinishCarId.length) {
      const noWinnerText = document.createElement('h2');
      noWinnerText.innerHTML = 'No winner';

      this.container.append(noWinnerText);
    } else {
      listFinishCarId.forEach((finishCar, i) => {
        const [carId, time] = finishCar;
        const car = RaceBlock.getCar(carId);

        const div = document.createElement('div');
        div.className = 'car__finish-list';
        this.container.append(div);

        div.insertAdjacentHTML('beforeend', `
          <h2>${i + 1}</h2>
          <h2>${car.name}</h2>
          <h2>${time} s</h2>
        `);
        div.firstElementChild?.after(createColorCar(car.color));
      });
    }
  }

  render() {
    this.createFinishList();
    return this.container;
  }
}
export default CarFinishList;
