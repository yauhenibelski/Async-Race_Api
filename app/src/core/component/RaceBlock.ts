import Component from './template/component';
import { createBlock } from '../utils/GaragePage/create_raceBlock';
import { CurrentCar } from '../types/types';

class RaceBlock extends Component {
  private static container: HTMLElement;

  static currentCars: CurrentCar[];

  static getCar(id: number) {
    return this.currentCars.filter((car) => car.id === id)[0];
  }

  static render: () => Promise<HTMLElement>;

  constructor() {
    super('div', 'race-block');
    RaceBlock.container = this.container;
    RaceBlock.render = this.render;
  }

  async render() {
    await createBlock(this.container);
    return this.container;
  }
}
export default RaceBlock;
