import Component from '../core/component/template/component';
import MainPageButtonsBlock from '../core/component/MainPageButtonsBlock';
import { createHeder } from '../core/utils/GaragePage/create_header';
import RaceBlock from '../core/component/RaceBlock';

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
    this.container.append(new RaceBlock().render());
  }

  static recreateComponent() {
    this.container.innerHTML = '';
    this.createPage();
  }

  render(): HTMLElement {
    GaragePage.createPage();
    return this.container;
  }
}
export default GaragePage;
