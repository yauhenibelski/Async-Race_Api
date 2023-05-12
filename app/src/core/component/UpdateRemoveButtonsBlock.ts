import { deleteCar } from '../api/deleteCar';
import RaceBlock from './RaceBlock';
import Button from './template/button';
import Component from './template/component';
import { focusUpdateInput } from '../utils/GaragePage/ focusUpdateInput';
import { startStopEngine } from '../api/engineStartStop';

class UpdateRemoveButtonsBlock extends Component {
  private carId: number;

  private carHTML: HTMLElement;

  constructor(carId: number, carHTML: HTMLElement) {
    super('div', 'select-remove-buttons');
    this.carHTML = carHTML;
    this.carId = carId;
  }

  private createBlock() {
    this.container.append(
      new Button('Update Car', () => { focusUpdateInput(this.carId); }).render(),
    );
    this.container.append(
      new Button('Remove', async () => {
        await deleteCar(this.carId);
        RaceBlock.render();
      }).render(),
    );

    this.container.append(
      new Button('Start', async (e) => {
        const button = e?.currentTarget as HTMLElement;
        const buttonText = button.innerHTML;

        if (buttonText === 'Start') {
          const time = await startStopEngine(this.carId);
          const windWidth = window.innerWidth;
          const carWidth = this.carHTML.offsetWidth;

          this.carHTML.style.transitionTimingFunction = 'ease-in-out';
          this.carHTML.style.left = `${windWidth - carWidth - 20}px`;
          this.carHTML.style.transitionDuration = `${time}ms`;

          this.carHTML.ontransitionend = () => {
            console.log(this.carId, 'finish');
            this.carHTML.ontransitionend = null;
          };
          button.innerHTML = 'Reset';

          await fetch(`http://localhost:3000/engine?id=${this.carId}&status=drive`, { method: 'PATCH' })
            .then((r) => {
              if (r.status === 500) {
                const carPositionLeft = this.carHTML.offsetLeft;
                this.carHTML.style.cssText = `left: ${carPositionLeft}px`;
                throw new Error('Engine broken!!!');
              }
            });
        } else {
          button.innerHTML = 'Start';
          this.carHTML.style.cssText = 'left: 0px';
          this.carHTML.ontransitionend = null;
        }
      }).render(),
    );
  }

  render(): HTMLElement {
    this.createBlock();
    return this.container;
  }
}
export default UpdateRemoveButtonsBlock;
