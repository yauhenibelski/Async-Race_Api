import Button from '../core/component/template/button';
import Component from '../core/component/template/component';

class WinnersPage extends Component {
  constructor(pageId: string) {
    super('table', 'winner-page');
    this.container.id = pageId;
  }

  private createPage() {
    const buttons = [
      new Button('Number', () => console.log('num')).render(),
      '',
      new Button('Car name', () => console.log('Car name')).render(),
      new Button('Wins', () => console.log('Wins')).render(),
      new Button('Best time', () => console.log('Best time')).render(),
    ];

    const tr = document.createElement('tr');
    buttons.forEach((button) => {
      const th = document.createElement('th');
      th.append(button);
      tr.append(th);
    });
    this.container.append(tr);
  }

  render() {
    this.createPage();
    return this.container;
  }
}
export default WinnersPage;
