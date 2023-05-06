import { baseUrl } from './base_url';

export async function createCar(name: string, color: string) {
  const data = { name, color };
  await fetch(`${baseUrl}garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
