# API Docs

Base URL (local): `http://localhost:5000`

## Health
- `GET /health`

Response:
```json
{ "status": "ok" }
```

## Programs
- `GET /api/programs`

Response:
```json
[
  {
    "id": 1,
    "name": "Digital Transformation",
    "owner": "PMO Team",
    "status": "ACTIVE",
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z"
  }
]
```

Notes:
- Current implementation returns mock data from `src/services/program.service.ts`.
