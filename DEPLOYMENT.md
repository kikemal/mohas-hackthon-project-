# Deployment

## Local development (recommended)

Backend:
1. `cp .env.example .env`
2. `npm install`
3. `npm run dev`

Frontend:
1. `cd client`
2. `npm install`
3. `npm run dev`

## Docker Compose

1. `docker compose up --build`

Services:
- Postgres: `localhost:5432`
- Backend: `localhost:5000`
- Frontend: `localhost:5173`

## Prisma

From the host machine (backend):
- Generate client: `npm run prisma:generate`
- Migrate (dev): `npm run prisma:migrate`
- Seed: `npm run prisma:seed`
