import { baseUrl } from '../constants/base_url';

export function updateWinner(id: number, data: {wins: number, time: number}) {
  fetch(`${baseUrl}winners/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
