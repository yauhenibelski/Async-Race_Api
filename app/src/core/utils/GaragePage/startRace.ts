/* eslint-disable no-param-reassign */
import RaceBlock from '../../component/RaceBlock';
import { startResetCar } from './startResetCar';
import { setStatusCar } from '../../api/setStatusCar';

export async function startRace(e?: MouseEvent) {
  const raceButton = e?.currentTarget as HTMLButtonElement;
  const raceButtonName = raceButton.innerHTML === 'Race'
    ? 'Reset'
    : 'Race';
  raceButton.innerHTML = raceButtonName;

  const startButtons = document.querySelectorAll('[data-about="start"]');
  const allButtons = document.querySelectorAll('button');

  if (raceButtonName === 'Reset') {
    allButtons.forEach((button) => { button.disabled = true; });
  } else {
    allButtons.forEach((button) => { button.disabled = false; });
  }

  startButtons.forEach(async (b, i) => {
    const button = b as HTMLButtonElement;
    const [car, carId] = RaceBlock.currentCars[i];

    await startResetCar(car, carId, button);
  });

  const interval = setInterval(() => {
    if (!setStatusCar.callStack.getStackLength()) {
      raceButton.disabled = false;
      clearInterval(interval);
    }
  });
}
