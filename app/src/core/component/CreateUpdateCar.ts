import Button from './template/button';
import Component from './template/component';
import { createUpdateCar } from '../utils/GaragePage/create-update_car';
import { createTextOrColorInput } from '../utils/GaragePage/create_Text_Or_ColorInput';

class CreateUpdateCar extends Component {
  static value: 'Create car' | 'Update car';

  static container: HTMLElement;

  static render: () => HTMLElement;

  static textObject = {
    color: '#7A7A7A',
    text: '',
    updateCarId: 0,
  };

  constructor(value: 'Create car' | 'Update car') {
    super('div', 'create-update-car');
    CreateUpdateCar.value = value;
    CreateUpdateCar.container = this.container;
    CreateUpdateCar.render = this.render;
  }

  static createComponent() {
    this.container.innerHTML = '';
    const [nameButton] = CreateUpdateCar.value.split(' ');
    this.container.append(createTextOrColorInput('text'));
    this.container.append(createTextOrColorInput('color'));
    this.container.append(new Button(nameButton, () => {
      createUpdateCar(CreateUpdateCar.value);
    }).render());
  }

  render(): HTMLElement {
    CreateUpdateCar.createComponent();
    return this.container;
  }
}
export default CreateUpdateCar;
