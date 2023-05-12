import Component from './template/component';
import { createBlock } from '../utils/GaragePage/create_raceBlock';

class RaceBlock extends Component {
  private static container: HTMLElement;

  static currentCars: (HTMLElement | number)[][] = [];

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
