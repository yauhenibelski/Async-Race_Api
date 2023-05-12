import { startStopEngine } from '../../api/engineStartStop';

export async function startResetCar(
  car: HTMLElement,
  id: number,
  currentButton: HTMLButtonElement,
) {
  const carHTML = car;
  const button = currentButton;
  const buttonText = button.innerHTML;
  const carId = id;

  if (buttonText === 'Start') {
    button.innerHTML = 'Reset';
    const time = await startStopEngine(carId);
    const windWidth = window.innerWidth;
    const carWidth = carHTML.offsetWidth;

    carHTML.style.transitionTimingFunction = 'ease-in-out';
    carHTML.style.left = `${windWidth - carWidth - 20}px`;
    carHTML.style.transitionDuration = `${time}ms`;

    carHTML.ontransitionend = () => {
      console.log(carId, 'finish');
      carHTML.ontransitionend = null;
    };

    await fetch(`http://localhost:3000/engine?id=${carId}&status=drive`, { method: 'PATCH' })
      .then((r) => {
        if (r.status === 500) {
          const carPositionLeft = carHTML.offsetLeft;
          carHTML.style.cssText = `left: ${carPositionLeft}px`;
        }
      });
  } else {
    button.innerHTML = 'Start';
    carHTML.style.cssText = 'left: 0px';
    carHTML.ontransitionend = null;
  }
}
