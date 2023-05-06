import { Car } from '../types/car';
import { baseUrl } from './base_url';

export async function updateCar({ name, color, id }: Car) {
  const data = { name, color, id };
  await fetch(`${baseUrl}garage/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
