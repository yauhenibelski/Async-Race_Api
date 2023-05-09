import CreateUpdateCar from './CreateUpdateCar';
import Button from './template/button';
import Component from './template/component';
import { generateRandomCars } from '../utils/GaragePage/generateRandomCars';

class MainPageButtonsBlock extends Component {
  constructor() {
    super('div', 'buttons-container');
  }

  renderButtonsBlock() {
    const div = document.createElement('div');
    div.className = 'buttons-block';
    div.append(new Button('Race', () => console.log('race')).render());
    div.append(new Button('Reset', () => console.log('reset')).render());
    div.append(new Button('Generate Cars', () => { generateRandomCars(100); }).render());
    this.container.append(div);
  }

  render(): HTMLElement {
    this.container.append(new CreateUpdateCar('Create car').render());
    this.renderButtonsBlock();
    return this.container;
  }
}
export default MainPageButtonsBlock;
