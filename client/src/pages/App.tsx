import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { Program } from '../types/program';

export default function App() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    api.getPrograms().then(setPrograms).catch(() => setPrograms([]));
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Program Management</h1>
      <p>Backend: /api/programs</p>
      <ul>
        {programs.map((p) => (
          <li key={p.id}>
            {p.name} - {p.status} (owner: {p.owner})
          </li>
        ))}
      </ul>
    </div>
  );
}
