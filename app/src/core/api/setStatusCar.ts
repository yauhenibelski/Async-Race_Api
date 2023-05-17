import { baseUrl } from '../constants/base_url';

export function setStatusCar(carId: number) {
  return fetch(`${baseUrl}engine?id=${carId}&status=drive`, { method: 'PATCH' });
}

setStatusCar.callStack = {
  stack: [] as number[],
  add: (id: number) => setStatusCar.callStack.stack.push(id),
  delete: (id: number) => {
    setStatusCar.callStack.stack = setStatusCar.callStack.stack.filter((carId) => carId !== id);
  },
  waitingForRequestsToFinish: (fn: () => void) => {
    const interval = setInterval(() => {
      if (!setStatusCar.callStack.stack.length) {
        clearInterval(interval);
        fn();
      }
    });
  },
};
