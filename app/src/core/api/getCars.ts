import { baseUrl } from '../constants/base_url';

export async function getCars(limit: number, page = 1) {
  const res = await fetch(`${baseUrl}garage?_page=${page}&_limit=${limit}`);
  const totalCount = res.headers.get('X-Total-Count') ? +(res.headers.get('X-Total-Count')!) : 0;
  const response = res.json();
  return { response, totalCount };
}
