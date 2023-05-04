import Component from './template/component';
import Link from './template/link';

class Navigation extends Component {
  private garagePageLink = new Link('Garage', '/garage').render();

  private winnersPageLink = new Link('Winners', '/winners').render();

  constructor(className?: string) {
    super('nav', className);
  }

  render(): HTMLElement {
    this.container.append(this.garagePageLink);
    this.container.append(this.winnersPageLink);

    return this.container;
  }
}

export default Navigation;
