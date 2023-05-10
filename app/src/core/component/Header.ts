import Component from './template/component';
import { createHeader } from '../utils/GaragePage/create_header';

class Header extends Component {
  private static container: HTMLElement;

  static textObject = {
    containName: 'Garage',
    pageText: 'Page',
    pageNum: 1,
    totalCountCars: 0,
  };

  static render: () => HTMLElement | Promise<HTMLElement>;

  constructor() {
    super('header', 'header');
    Header.render = this.render;
    Header.container = this.container;
  }

  render() {
    createHeader(this.container);
    return this.container;
  }
}
export default Header;
