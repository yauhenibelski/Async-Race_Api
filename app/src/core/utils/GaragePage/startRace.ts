/* eslint-disable no-param-reassign */
import RaceBlock from '../../component/RaceBlock';
import { startResetCar } from './startResetCar';
import { setStatusCar } from '../../api/setStatusCar';
import PopUp from '../../component/PopUp';
import CarFinishList from '../../component/CarFinishList';
import { createWinner } from '../../api/createWinner';
import { getWinner } from '../../api/getWinner';
import { updateWinner } from '../../api/updateWinner';

export async function startRace(e?: MouseEvent) {
  const raceButton = e?.currentTarget as HTMLButtonElement;
  const raceButtonName = raceButton.innerHTML === 'Race'
    ? 'Reset'
    : 'Race';
  raceButton.innerHTML = raceButtonName;

  const startButtons = document.querySelectorAll('[data-about="start"]');
  const allButtons = document.querySelectorAll('button');

  startButtons.forEach(async (b, i) => {
    const button = b as HTMLButtonElement;
    const { HTML, id } = RaceBlock.currentCars[i];

    await startResetCar(HTML, id, button);
  });

  if (raceButtonName === 'Reset') {
    allButtons.forEach((button) => { button.disabled = true; });

    setStatusCar.callStack.waitingForRequestsToFinish(async () => {
      raceButton.disabled = false;
      if (CarFinishList.finishCars.length) {
        const [winnerId, winnerTime] = CarFinishList.finishCars[0];

        await getWinner(winnerId).then((car) => {
          if (car) {
            const updateCar = {
              wins: car.wins + 1,
              time: car.time > winnerTime ? winnerTime : car.time,
            };
            updateWinner(winnerId, updateCar);
          } else {
            createWinner(winnerId, winnerTime);
          }
        });
      }
      PopUp.ran(new CarFinishList().render());
    });
  } else {
    allButtons.forEach((button) => { button.disabled = false; });
  }
}
