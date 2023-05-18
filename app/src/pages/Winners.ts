/* eslint-disable no-param-reassign */
import { getCar } from '../core/api/getCar';
import { getWinners } from '../core/api/getWinners';
import Header from '../core/component/Header';
import WinnersTableRow from '../core/component/WinnersTableRow';
import Button from '../core/component/template/button';
import Component from '../core/component/template/component';
import { pageLimitWinners } from '../core/constants/pageLimit';
import { WinnersTableRowCar } from '../core/types/types';
import { createColorCar } from '../core/utils/create_a_car_by_color';

class WinnersPage extends Component {
  static currentCars: WinnersTableRowCar[];

  private static container: HTMLElement;

  static render: () => Promise<HTMLElement>;

  constructor(pageId: string) {
    super('table', 'winner-page');
    this.container.id = pageId;
    WinnersPage.render = this.render;
    WinnersPage.container = this.container;
  }

  private static async createPage() {
    this.container.innerHTML = '';
    const buttons = [
<<<<<<< HEAD
      new Button('Car name', () => WinnersPage.render()).render(),
      '',
      new Button('Wins', () => console.log('Wins')).render(),
      new Button('Best time', () => console.log('Best time')).render(),
      new Button('Number', () => console.log('num')).render(),
=======
      new Button('Car name', () => console.log('Car name')).render(),
      '',
      new Button('Best time', () => console.log('Best time')).render(),
      new Button('Wins', () => console.log('Wins')).render(),
      new Button('Position', () => console.log('num')).render(),
>>>>>>> 2df2554 (fix: Winner page)
    ];

    const tr = document.createElement('tr');
    buttons.forEach((button) => {
      const th = document.createElement('th');
      th.append(button);
      tr.append(th);
    });
    this.container.append(tr);

    const { response } = await getWinners(pageLimitWinners, Header.textObject.winnersPageNum);

    await response.then(async (winners: {id: number, wins: number, time: number}[]) => {
      const garage = winners.map((w) => getCar(w.id));

      Promise.all(garage)
        .then((garage) => {
          WinnersPage.currentCars = garage.map((car, i) => Object.assign(car, winners[i]))
            .sort((a, b) => a.time - b.time)
            .map((car, i) => {
              Object.defineProperty(car, 'id', { enumerable: false });
              car.color = createColorCar(car.color);
              car.number = i + 1;
              return car;
            });

          WinnersPage.currentCars.forEach((car) => {
            this.container.append(new WinnersTableRow(car).render());
          });
        });
    });
  }

  async render() {
    await WinnersPage.createPage();
    return this.container;
  }
}
export default WinnersPage;
