import Component from './component';

class Button extends Component {
  constructor(buttonName: string, callback: () => void, className?: string) {
    super('button', className);
    this.container.innerHTML = buttonName;
    this.container.onclick = callback;
  }

  render() {
    return this.container;
  }
}

export default Button;
