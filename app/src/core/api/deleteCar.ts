import { baseUrl } from '../constants/base_url';

export async function deleteCar(carId: number) {
  return fetch(`${baseUrl}garage/${carId}`, {
    method: 'DELETE',
  });
}
