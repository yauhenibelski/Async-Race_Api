import { baseUrl } from '../constants/base_url';

export function setStatusCar(carId: number) {
  return fetch(`${baseUrl}engine?id=${carId}&status=drive`, { method: 'PATCH' });
}

setStatusCar.callStack = {
  stack: [] as number[],
  getStackLength: () => setStatusCar.callStack.stack.length,
  add: (id: number) => setStatusCar.callStack.stack.push(id),
  delete: (id: number) => {
    setStatusCar.callStack.stack = setStatusCar.callStack.stack.filter((carId) => carId !== id);
  },
};
