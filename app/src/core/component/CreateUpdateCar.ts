import Button from './template/button';
import Component from './template/component';

class CreateUpdateCar extends Component {
  private value: string;

  constructor(value: 'Create car' | 'Update car') {
    super('div', 'create-update-car');
    this.value = value;
  }

  private createInputText() {
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = `${this.value}`;
    this.container.append(inputText);
  }

  private createInputColor() {
    const inputText = document.createElement('input');
    inputText.type = 'color';
    this.container.append(inputText);
  }

  render(): HTMLElement {
    const [valueText] = this.value.split(' ');
    const button = new Button(valueText, () => console.log(this.value));
    this.createInputText();
    this.createInputColor();
    this.container.append(button.render());
    return this.container;
  }
}
export default CreateUpdateCar;
