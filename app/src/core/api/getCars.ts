import { baseUrl } from './base_url';

export async function getCars(page: number, limit = 7) {
  const res = await fetch(`${baseUrl}garage?_page=${page}&_limit=${limit}`);
  const totalCount = res.headers.get('X-Total-Count');
  const response = res.json();
  return { response, totalCount };
}
