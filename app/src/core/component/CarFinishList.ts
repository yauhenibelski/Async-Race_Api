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
        const div = document.createElement('div');
        const num = document.createElement('h2');
        const carNameText = document.createElement('h2');
        const timeText = document.createElement('h2');
        const car = RaceBlock.getCar(carId);
        const carHTML = createColorCar(car.color);

        div.className = 'car__finish-list';

        num.innerHTML = `${i + 1}.`;
        carNameText.innerHTML = `${car.name}`;
        timeText.innerHTML = ` ${time / 1000} s`;

        div.append(num);
        div.append(carHTML);
        div.append(carNameText);
        div.append(timeText);

        this.container.append(div);
      });
    }
  }

  render() {
    this.createFinishList();
    return this.container;
  }
}
export default CarFinishList;
