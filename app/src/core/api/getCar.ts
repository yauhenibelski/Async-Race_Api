import { baseUrl } from '../constants/base_url';

export async function getCar(carId: number) {
  const response = await fetch(`${baseUrl}garage/${carId}`);
  return response.json();
}
