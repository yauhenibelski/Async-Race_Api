import Component from './template/component';
import { createBlock } from '../utils/GaragePage/create_raceBlock';

class RaceBlock extends Component {
  static container: HTMLElement;

  static render: () => HTMLElement;

  constructor() {
    super('div', 'race-block');
    RaceBlock.container = this.container;
    RaceBlock.render = this.render;
  }

  render() {
    createBlock(this.container);
    return this.container;
  }
}
export default RaceBlock;
