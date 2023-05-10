import { baseUrl } from '../constants/base_url';

export async function getCars(page: number, limit: number) {
  const res = await fetch(`${baseUrl}garage?_page=${page}&_limit=${limit}`);
  const totalCount = res.headers.get('X-Total-Count') ? +(res.headers.get('X-Total-Count')!) : 0;
  const response = res.json();
  return { response, totalCount };
}
