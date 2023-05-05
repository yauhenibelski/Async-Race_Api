import Button from './template/button';
import Component from './template/component';

class CreateUpdateCar extends Component {
  private value: string;

  constructor(value: 'Create car' | 'Update car') {
    const className = value === 'Create car'
      ? 'create-update-car'
      : 'create-update-car update-car__inactive';

    super('div', className);

    this.value = value;
    this.container.id = value.toLocaleLowerCase().split(' ').join('_');
  }

  private renderInputText() {
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = `${this.value}`;
    this.container.append(inputText);
  }

  private renderInputColor() {
    const inputText = document.createElement('input');
    inputText.type = 'color';
    inputText.onchange = (e) => {
      const elem = e.target as HTMLInputElement;
      console.log(elem.value);
    };
    this.container.append(inputText);
  }

  render(): HTMLElement {
    const [valueText] = this.value.split(' ');
    const button = new Button(valueText, () => console.log(this.value));
    this.renderInputText();
    this.renderInputColor();
    this.container.append(button.render());
    return this.container;
  }
}
export default CreateUpdateCar;
