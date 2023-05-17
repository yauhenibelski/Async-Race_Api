import { baseUrl } from '../constants/base_url';

export async function getWinners(limit: number, page = 1) {
  const res = await fetch(`${baseUrl}winners?_page=${page}&_limit=${limit}`);
  const totalWinners = res.headers.get('X-Total-Count') ? +(res.headers.get('X-Total-Count')!) : 0;
  const response = res.json();
  return { response, totalWinners };
}
