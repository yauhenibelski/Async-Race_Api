import Component from '../core/component/template/component';
import MainPageButtonsBlock from '../core/component/MainPageButtonsBlock';
import RaceBlock from '../core/component/RaceBlock';

class GaragePage extends Component {
  private static container: HTMLElement;

  static render: () => HTMLElement;

  constructor(pageId: string) {
    super('div', 'garage-page');
    this.container.id = pageId;
    GaragePage.container = this.container;
    GaragePage.render = this.render;
  }

  private async createPage() {
    this.container.innerHTML = '';
    this.container.append(new MainPageButtonsBlock().render());
    this.container.append(await new RaceBlock().render());
  }

  render() {
    this.createPage();
    return this.container;
  }
}
export default GaragePage;
