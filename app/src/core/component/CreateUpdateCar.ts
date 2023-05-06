import Button from './template/button';
import Component from './template/component';
import { createUpdateCar } from '../utils/GaragePage/create-update_car';

class CreateUpdateCar extends Component {
  private value: 'Create car' | 'Update car';

  static textObject = {
    color: '#000000',
    name: '',
  };

  constructor(value: 'Create car' | 'Update car') {
    const className = value === 'Create car'
      ? 'create-update-car'
      : 'create-update-car update-car__inactive';

    super('div', className);

    this.value = value;
  }

  private renderInputText() {
    const inputText = document.createElement('input');
    inputText.id = this.value.toLocaleLowerCase().split(' ').join('_');
    inputText.type = 'text';
    inputText.onchange = (e) => {
      const elem = e.target as HTMLInputElement;
      CreateUpdateCar.textObject.name = elem.value;
    };
    inputText.placeholder = `${this.value}`;
    this.container.append(inputText);
  }

  private renderInputColor() {
    const inputText = document.createElement('input');
    inputText.type = 'color';
    inputText.onchange = (e) => {
      const elem = e.target as HTMLInputElement;
      CreateUpdateCar.textObject.color = elem.value;
    };
    this.container.append(inputText);
  }

  render(): HTMLElement {
    const [valueText] = this.value.split(' ');
    const button = new Button(valueText, () => { createUpdateCar(this.value); });
    this.renderInputText();
    this.renderInputColor();
    this.container.append(button.render());
    return this.container;
  }
}
export default CreateUpdateCar;
