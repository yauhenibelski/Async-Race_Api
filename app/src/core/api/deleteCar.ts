import { baseUrl } from '../constants/base_url';

export async function deleteCar(carId: string) {
  return fetch(`${baseUrl}garage/${carId}`, {
    method: 'DELETE',
  }).then(() => document.getElementById(carId)?.remove());
}
