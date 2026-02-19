# Command Center + Second Brain

Unified Next.js app for revenue operations, mission tracking, and markdown-first knowledge management.

## Features

- Mission dashboard pages (`/`, `/mission`, `/10k`, `/actions`, `/ugc`, `/health`)
- Second Brain browser (`/brain`, `/docs`) with search + wikilinks
- Live updates via SSE (`/api/events`)
- Document API with resilient parsing (`/api/documents`)
- Error boundaries and route-level fallback UI

## Local Setup

```bash
cd command-center
npm install
npm run dev
```

Open http://localhost:3000

## Build & Production Check

```bash
npm run build
npm run start
```

## Content Source

Markdown docs are loaded from:

- `BRAIN_DIR` env var (optional)
- fallback: `/Users/anilgunjal/.openclaw/workspace/brain`

No required environment variables are needed to run.

## Deploy to Vercel

- `vercel.json` is configured for Next.js
- API routes are dynamic where needed
- Push repo and import to Vercel

## Authentication (Required)

This app is password-protected.

- Set `COMMAND_CENTER_PASSWORD` in Vercel Environment Variables.
- Optional: set `COMMAND_CENTER_SESSION_SECRET` for custom HMAC signing secret.
- If `COMMAND_CENTER_PASSWORD` is not set, the app falls back to default password: `anil2026`.

### Behavior

- `/login` is public.
- `/api/auth/login` and `/api/auth/logout` are public.
- All other routes require authentication.
- Session is stored in an httpOnly cookie with `SameSite=Strict` and `Secure` enabled in production.

## Notes

If documents fail to load, the UI shows a non-crashing fallback and API returns structured errors for debugging.
