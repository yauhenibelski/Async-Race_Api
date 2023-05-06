import { Car } from '../types/car';
import { baseUrl } from './base_url';

export async function createCar({ name, color, id }: Car) {
  const data = { name, color, id };
  await fetch(`${baseUrl}garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
