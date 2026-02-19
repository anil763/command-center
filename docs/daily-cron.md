# Daily Numerology Cron

## Endpoint
- `GET /api/daily`
- Optional force-refresh: `GET /api/daily?refresh=1`

## Vercel Cron
Configured in `vercel.json`:
- `0 11 * * *` (11:00 UTC = 6:00 AM EST)
- Calls `/api/daily`

## OpenClaw Gateway Cron (recommended)
If running via Gateway/local infra, schedule a daily 6:00 AM America/New_York job that executes:

```bash
curl -fsS https://anilsbrain.com/api/daily > /dev/null
```

This pre-generates the file in `../brain/daily/YYYY-MM-DD.json` before opening `/daily`.
