import RaceBlock from '../../component/RaceBlock';
import { startResetCar } from './startResetCar';

export function startRace(e?: MouseEvent) {
  const raceButton = e?.currentTarget as HTMLButtonElement;
  const raceButtonName = raceButton.innerHTML === 'Race'
    ? 'Reset'
    : 'Race';
  raceButton.innerHTML = raceButtonName;

  const buttons = document.querySelectorAll('[data-about="start"]');

  buttons.forEach((b, i) => {
    const button = b as HTMLButtonElement;
    const [car, carId] = RaceBlock.currentCars[i];
    startResetCar(car as HTMLElement, carId as number, button);
  });
}
