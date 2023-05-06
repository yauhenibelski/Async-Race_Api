import Button from './template/button';
import Component from './template/component';
import { createUpdateCar } from '../utils/GaragePage/create-update_car';

class CreateUpdateCar extends Component {
  private value: 'Create car' | 'Update car';

  static textObject = {
    color: '#000000',
    text: '',
  };

  constructor(value: 'Create car' | 'Update car') {
    super('div', 'create-update-car');
    this.value = value;
  }

  private renderInput(type: 'color' | 'text') {
    const input = document.createElement('input');
    input.type = type;
    input.onchange = (e) => {
      const elem = e.target as HTMLInputElement;
      CreateUpdateCar.textObject[type] = elem.value;
    };
    if (type === 'text') {
      input.id = this.value.toLocaleLowerCase().split(' ').join('_');
      input.placeholder = `${this.value}`;
    }
    this.container.append(input);
  }

  render(): HTMLElement {
    const [nameButton] = this.value.split(' ');
    this.renderInput('text');
    this.renderInput('color');
    this.container.append(new Button(nameButton, () => { createUpdateCar(this.value); }).render());
    return this.container;
  }
}
export default CreateUpdateCar;
