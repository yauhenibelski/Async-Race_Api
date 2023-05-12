import Component from './component';

class Button extends Component {
  constructor(
    buttonName: string,
    callback: (e?: MouseEvent) => void,
    className?: string,
  ) {
    super('button', className);
    this.container.innerHTML = buttonName;
    this.container.onclick = callback;
    this.container.dataset.about = buttonName.toLocaleLowerCase().split(' ').join('_');
  }

  render() {
    return this.container;
  }
}

export default Button;
