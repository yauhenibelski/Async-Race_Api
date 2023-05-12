import { baseUrl } from '../constants/base_url';

export async function startStopEngine(carId: number) {
  let time = 0;
  await fetch(`${baseUrl}engine?id=${carId}&status=started`, { method: 'PATCH' })
    .then((response) => response.json())
    .then((params: {'velocity': number, 'distance': number}) => {
      time = Math.round(params.distance / params.velocity);
    });
  return time;
}
