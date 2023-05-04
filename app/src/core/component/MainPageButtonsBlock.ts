import CreateUpdateCar from './CreateUpdateCar';
import Button from './template/button';
import Component from './template/component';

class MainPageButtonsBlock extends Component {
  constructor() {
    super('div', 'buttons-container');
  }

  createButtonsBlock() {
    const div = document.createElement('div');
    div.className = 'buttons-block';
    div.append(new Button('Race', () => console.log('race')).render());
    div.append(new Button('Reset', () => console.log('reset')).render());
    div.append(new Button('Generate Cars', () => console.log('generate cars')).render());
    this.container.append(div);
  }

  render(): HTMLElement {
    this.container.append(new CreateUpdateCar('Create car').render());
    this.container.append(new CreateUpdateCar('Update car').render());
    this.createButtonsBlock();
    return this.container;
  }
}
export default MainPageButtonsBlock;
