import { baseUrl } from './base_url';

export async function getCars() {
  const res = await fetch(`${baseUrl}garage?_page=1&_limit=7`);
  const totalCount = res.headers.get('X-Total-Count');
  const response = res.json();
  return { response, totalCount };
}
