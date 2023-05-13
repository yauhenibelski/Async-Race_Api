import Component from '../core/component/template/component';
import MainPageButtonsBlock from '../core/component/MainPageButtonsBlock';
import RaceBlock from '../core/component/RaceBlock';
import Header from '../core/component/Header';

class GaragePage extends Component {
  private static container: HTMLElement;

  static render: () => Promise<HTMLElement>;

  constructor() {
    super('div', 'garage-page');
    GaragePage.container = this.container;
    GaragePage.render = this.render;
  }

  private async createPage() {
    this.container.innerHTML = '';
    this.container.append(new Header().render());
    this.container.append(new MainPageButtonsBlock().render());
    this.container.append(await new RaceBlock().render());
  }

  async render(): Promise<HTMLElement> {
    await this.createPage();
    return this.container;
  }
}
export default GaragePage;
