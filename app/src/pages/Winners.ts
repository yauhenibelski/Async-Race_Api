import Component from '../core/component/template/component';
// import { baseUrl } from '../core/constants/base_url';

class WinnersPage extends Component {
  constructor(pageId: string) {
    super('div', 'winner-page');
    this.container.id = pageId;
  }

  render(): HTMLElement {
    return this.container;
  }
}
export default WinnersPage;
