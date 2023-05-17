import { baseUrl } from '../constants/base_url';

export async function getWinner(id: number) {
  const response = await fetch(`${baseUrl}winners/${id}`);
  const { status } = response;
  return status === 200 ? response.json() : null;
}
