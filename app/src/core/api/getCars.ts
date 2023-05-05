import { baseUrl } from './base_url';

export async function getCars() {
  const response = fetch(`${baseUrl}garage`)
    .then((result) => result.json());
  return response;
}
