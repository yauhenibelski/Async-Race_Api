import Component from './template/component';
import { pageLimit } from '../constants/pageLimit';
import Button from './template/button';
import Header from './Header';
import RaceBlock from './RaceBlock';

class Pagination extends Component {
  private count: number;

  constructor(count: number) {
    super('div', 'pagination');
    this.count = count;
  }

  private changeCage(e?: MouseEvent): void {
    const elem = e?.currentTarget as HTMLButtonElement;
    const elemNum = elem.dataset.about ? +elem.dataset.about : 0;
    Header.textObject.garagePageNum = elemNum;
    RaceBlock.render();
  }

  private createPaginationBlock() {
    for (let i = 1; i <= Math.ceil(this.count / pageLimit); i += 1) {
      const buttonClass = Header.textObject.garagePageNum === i ? 'current-page' : '';
      this.container.append(new Button(`${i}`, this.changeCage, buttonClass).render());
    }
  }

  render(): HTMLElement {
    this.createPaginationBlock();
    return this.container;
  }
}
export default Pagination;
