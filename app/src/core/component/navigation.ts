import Component from './template/component';
import Link from './template/link';

class Navigation extends Component {
  constructor(className?: string) {
    super('nav', className);
  }

  render(): HTMLElement {
    this.container.append(new Link('Garage', '/').render());
    this.container.append(new Link('Winners', '/winners').render());

    return this.container;
  }
}

export default Navigation;
