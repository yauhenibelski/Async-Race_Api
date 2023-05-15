import Component from './template/component';
import Link from './template/link';
import { PageId } from '../constants/PageId';

class Navigation extends Component {
  constructor(className?: string) {
    super('nav', className);
  }

  render(): HTMLElement {
    this.container.append(new Link('Garage', PageId.Garage).render());
    this.container.append(new Link('Winners', PageId.Winners).render());

    return this.container;
  }
}

export default Navigation;
