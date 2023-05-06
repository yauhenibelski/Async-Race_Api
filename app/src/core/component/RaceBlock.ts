import Component from './template/component';
import { createBlock } from '../utils/GaragePage/create_raceBlock';

class RaceBlock extends Component {
  static container: HTMLElement;

  constructor() {
    super('div', 'race-block');
    RaceBlock.container = this.container;
  }

  static createBlock = createBlock;

  static async refreshComponent() {
    RaceBlock.createBlock(this.container);
  }

  render(): HTMLElement {
    RaceBlock.createBlock(this.container);
    return this.container;
  }
}
export default RaceBlock;
