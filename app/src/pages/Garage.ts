import Component from '../core/component/template/component';
import MainPageButtonsBlock from '../core/component/MainPageButtonsBlock';
import RaceBlock from '../core/component/RaceBlock';
import Header from '../core/component/Header';

class GaragePage extends Component {
  static container: HTMLElement;

  constructor() {
    super('div', 'garage-page');
    GaragePage.container = this.container;
  }

  static async createPage() {
    this.container.append(new Header().render());
    this.container.append(new MainPageButtonsBlock().render());
    this.container.append(await new RaceBlock().render());
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
