import Component from './template/component';
import { createHeader } from '../utils/GaragePage/create_header';

class Header extends Component {
  private static container: HTMLElement;

  static textObject = {
    containName: '',
    pageText: 'Page',
    totalCountCars: 0,
    garagePageNum: 1,
    winnersPageNum: 1,
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
