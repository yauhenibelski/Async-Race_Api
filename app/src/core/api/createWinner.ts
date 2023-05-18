import { baseUrl } from '../constants/base_url';

export function createWinner(id: number, time: number, wins = 1) {
  const winner = { id, wins, time };
  fetch(`${baseUrl}winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  });
}
