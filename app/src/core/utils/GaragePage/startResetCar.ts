import { startEngineGetTime } from '../../api/engineStartStop';
import { setStatusCar } from '../../api/setStatusCar';
import CarFinishList from '../../component/CarFinishList';

export async function startResetCar(car: HTMLElement, id: number, currentButton: HTMLElement) {
  const carHTML = car;
  const button = currentButton;
  const buttonText = button.innerHTML;

  if (buttonText === 'Start') {
    setStatusCar.callStack.add(id);

    button.innerHTML = 'Reset';

    const time = await startEngineGetTime(id);
    const windowWidth = window.innerWidth;
    const carWidth = carHTML.offsetWidth;

    carHTML.style.transitionTimingFunction = 'ease-in-out';
    carHTML.style.left = `${windowWidth - carWidth - 30}px`;
    carHTML.style.transitionDuration = `${time}ms`;

    await setStatusCar(id)
      .then((response) => {
        if (response.status === 500) {
          const carPositionLeft = carHTML.offsetLeft;
          carHTML.style.cssText = `left: ${carPositionLeft}px`;
          carHTML.style.transform = 'rotate(163deg) translateX(-50px)';
        }
        if (response.status === 200) {
          CarFinishList.finishCars.push([id, time]);
        }
        setStatusCar.callStack.delete(id);
      });
  } else {
    button.innerHTML = 'Start';
    carHTML.style.cssText = 'left: 0px';
  }
}
