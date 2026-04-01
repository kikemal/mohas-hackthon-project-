import type { Program } from '../types/program';

/** In dev, default to same origin so Vite proxies `/api` to the backend (avoids misconfigured absolute URLs). */
const raw = import.meta.env.VITE_API_BASE;
const API_BASE =
  raw === undefined || raw === null
    ? import.meta.env.DEV
      ? ''
      : 'http://localhost:5000'
    : String(raw).trim();

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return (await response.json()) as T;
}

export const api = {
  getPrograms: () => getJson<Program[]>('/api/programs')
};
