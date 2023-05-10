import Component from './component';

class Button extends Component {
  constructor(buttonName: string, callback: (e?: MouseEvent) => void, className?: string) {
    super('button', className);
    this.container.innerHTML = buttonName;
    this.container.onclick = callback;
    this.container.id = buttonName.toLocaleLowerCase().split(' ').join('_');
  }

  render() {
    return this.container;
  }
}

export default Button;
