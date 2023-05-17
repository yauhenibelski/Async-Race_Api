import { baseUrl } from '../constants/base_url';

export function createWinner(id: number, time: number, wins = 1) {
  const winner = { id, time, wins };
  fetch(`${baseUrl}winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  });
}
