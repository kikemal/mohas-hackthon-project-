# Mesmer Program Management System

Full-stack scaffold:
- Backend: Node.js + Express + TypeScript + Prisma
- Frontend: React + TypeScript + Vite
- Tooling: ESLint + Prettier
- Docker: Postgres + backend + client

## Structure

- `src/` backend source
- `prisma/` Prisma schema + seed
- `tests/` Jest tests (backend)
- `client/` React app

## Quick start (no Docker)

Backend:
1. `cp .env.example .env`
2. `npm install`
3. `npm run dev`

Frontend:
1. `cd client`
2. `npm install`
3. `npm run dev`

Open:
- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:5000/health`
- Programs API: `http://localhost:5000/api/programs`

## Docs
- `API_DOCS.md`
- `DEPLOYMENT.md`
