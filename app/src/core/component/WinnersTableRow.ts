import { WinnersTableRowCar } from '../types/types';
import Component from './template/component';

class WinnersTableRow extends Component {
  private car: WinnersTableRowCar;

  constructor(car: WinnersTableRowCar) {
    super('tr', 'cars__winner-page');
    this.car = car;
  }

  render() {
    Object.values(this.car).forEach((val) => {
      const td = document.createElement('td');
      if (val instanceof HTMLElement) {
        td.append(val);
      } else {
        td.innerHTML = `${val}`;
      }
      this.container.append(td);
    });
    return this.container;
  }
}
export default WinnersTableRow;
