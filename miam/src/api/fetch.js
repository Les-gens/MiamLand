import { getToken } from './token.js';

const API_URL = new URL('http://localhost:8000/');

const getHeaders = async () => {
  const token = await getToken();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export const POST = async (dest, body) => {

  const headers = await getHeaders();
  console.log(new URL(dest, API_URL).href);
  const res = await fetch(new URL(dest, API_URL).href, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  console.log('POST RESULT', res);

  if(res.ok) {
    return await res.json();
  }
  throw { error: res.statusText };
}

export const GET = async (dest) => {
  const headers = await getHeaders();

  const res = await fetch(new URL(dest, API_URL).href, {
    method: 'GET',
    headers,
  });

  console.log('GET RESULT', res);

  if(res.ok) {
    return await res.json();
  }
  throw { error: res.statusText };
}
