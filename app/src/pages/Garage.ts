import Component from '../core/component/template/component';
import MainPageButtonsBlock from '../core/component/MainPageButtonsBlock';
import { createHeder } from '../core/utils/GaragePage/create_header';
import CarBlock from '../core/component/CarBlock';

class GaragePage extends Component {
  static textObject = {
    containName: 'Garage',
    currentPage: 'Page #1',
  };

  static container: HTMLElement;

  constructor() {
    super('div', 'garage-page');
    GaragePage.container = this.container;
  }

  static createPage() {
    this.container.append(createHeder());
    this.container.append(new MainPageButtonsBlock().render());
  }

  static refreshComponent() {
    this.container.innerHTML = '';
    this.createPage();
  }

  render(): HTMLElement {
    GaragePage.createPage();
    // -------------------------------------------------
    this.container.append(new CarBlock(1, 'Bmw', '#f50000').render());
    this.container.append(new CarBlock(2, 'Ford', '#34eb0f').render());
    // ---------------------------------------------------
    return this.container;
  }
}
export default GaragePage;
